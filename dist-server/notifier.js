'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ws = require('ws');

var _ws2 = _interopRequireDefault(_ws);

var _pathToRegexp = require('path-to-regexp');

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function parseQuery(string) {
  var params = string.split('&');
  var result = {};
  params.forEach(function (param) {
    var parts = param.split('=');
    // if we already have this parameter, it must be an array
    if (result[parts[0]]) {
      if (!Array.isArray(result[parts[0]])) {
        result[parts[0]] = [result[parts[0]]];
      }
      result[parts[0]].push(decodeURIComponent(parts[1]));
    } else {
      result[parts[0]] = decodeURIComponent(parts[1]);
    }
  });
  return result;
}

var Connection = function () {
  function Connection(socket, routes) {
    _classCallCheck(this, Connection);

    this._requests = [];
    this._socket = socket;
    this._routes = routes;
    this._listeners = {};

    this._socket.on('message', this._onMessage.bind(this));
    this._socket.on('close', this.close.bind(this));
  }

  _createClass(Connection, [{
    key: '_validate',
    value: function _validate(request) {
      // gets all routes and check if there is a match
      return this._routes.some(function (route) {
        var params = [];
        // params will be populated by pathToRegexp with the dynamic portios of
        // the route
        var pathRegexp = (0, _pathToRegexp2.default)(route.path, params);
        // path needs to be a valid express route
        if (pathRegexp.test(request.uri)) {
          if (params.length > 0) {
            // grap the param values for the dynamic URL
            var groups = pathRegexp.exec(request.uri);
            params.forEach(function (param, index) {
              // the resulting group has index 0 as the entire expression
              // this is why we have to increment index by 1
              request.params[param.name] = groups[index + 1];
            });
          }
          // add the route path to the request so that we can easily
          // reference which route was used for this request
          request.path = route.path;
          return true;
        }
        return false;
      });
    }
  }, {
    key: '_onMessage',
    value: function _onMessage(message) {
      var request = JSON.parse(message);
      if (request.op === 'start') {
        // Split out query parameters
        var parts = request.uri.split('?');
        request.uri = parts[0];
        if (parts[1]) {
          request.params = parseQuery(parts[1]);
        } else {
          request.params = [];
        }
        if (this._validate(request)) {
          this._requests.push(request);
          this._exec(request);
        } else {
          this._socket.send({
            error: { statusCode: 404, message: 'unknown uri ' + request.uri }
          });
        }
      } else if (request.op === 'stop') {
        this._requests = this._requests.filter(function (req) {
          return req.id !== request.id;
        });
      } else if (request.op === 'ping') {
        this._socket.send(JSON.stringify({ op: 'ping' }));
      } else {
        this._socket.send({
          error: { statusCode: 404, message: 'unknown op ' + request.op }
        });
        this.close();
      }
    }
  }, {
    key: '_exec',
    value: function _exec(request) {
      var _this = this;

      // stop after the first matching route
      this._routes.some(function (route) {
        if (request.path === route.path) {
          var socket = _this._socket;
          route.cb(request.params).then(function (result) {
            socket.send(JSON.stringify({ op: 'update', id: request.id, result: result }));
          }).catch(function (error) {
            return socket.send(JSON.stringify({ op: 'error', id: request.id, error: error }));
          });
          return true;
        }
        return false;
      }, this);
    }
  }, {
    key: 'close',
    value: function close() {
      if (this._socket) {
        this._socket.close();
        this._socket = undefined;
      }
      // notify possible listeners on the connection close event
      if (this._listeners.close) {
        this._listeners.close();
      }
    }
  }, {
    key: 'test',
    value: function test(cb) {
      var _this2 = this;

      if (this._socket) {
        this._requests.forEach(function (request) {
          if (cb(request)) {
            _this2._exec(request);
          }
        }, this);
      }
    }
  }, {
    key: 'on',
    value: function on(event, cb) {
      if (event === 'close') {
        this._listeners[event] = cb;
      }
    }
  }]);

  return Connection;
}();

var Notifier = function () {
  function Notifier() {
    _classCallCheck(this, Notifier);

    this._connections = [];
    this._routes = [];
    this._notifyListeners = [];
  }

  _createClass(Notifier, [{
    key: '_onConnection',
    value: function _onConnection(socket) {
      var connections = this._connections;
      var connection = new Connection(socket, this._routes);
      connections.push(connection);
      connection.on('close', function () {
        var index = connections.indexOf(connection);
        if (index) {
          connections.splice(index, 1);
        }
      });
    }
  }, {
    key: 'listen',
    value: function listen(server) {
      this._wsServer = new _ws2.default.Server({ server: server });
      this._wsServer.on('connection', this._onConnection.bind(this));
    }
  }, {
    key: 'use',
    value: function use(path, cb) {
      if (!this._wsServer) {
        this._routes.push({ path: path, cb: cb });
      } else {
        console.error('Cannot add listener to Notifier after listen is active.');
      }
    }
  }, {
    key: 'test',
    value: function test(cb) {
      this._connections.forEach(function (connection) {
        return connection.test(cb);
      });
    }
  }]);

  return Notifier;
}();

exports.default = Notifier;
//# sourceMappingURL=notifier.js.map