'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSession = addSession;
exports.getSession = getSession;
exports.addNotifier = addNotifier;
exports.getTasks = getTasks;
exports.getTask = getTask;
var _sessions = {};
var _notifiers = {
  task: []
};

var tasks = exports.tasks = [{
  id: 'task-1',
  name: 'Initializing instance',
  percentComplete: 0,
  status: 'Waiting'
}, {
  id: 'task-2',
  name: 'Adding components',
  percentComplete: 0,
  status: 'Waiting'
}, {
  id: 'task-3',
  name: 'Testing infrastructure',
  percentComplete: 0,
  status: 'Waiting'
}, {
  id: 'task-4',
  name: 'Removing instance',
  percentComplete: 0,
  status: 'Waiting'
}];

var increments = [5, 10, 20, 25];

setInterval(function () {
  var task = tasks[Math.floor(Math.random() * tasks.length)];

  if (!task.percentComplete) {
    task.status = 'Running';
  }

  _notifiers.task.forEach(function (notifier) {
    return notifier(task);
  });
}, 2000);

setInterval(function () {
  tasks.forEach(function (task) {
    if (task.status === 'Running') {
      if (task.percentComplete < 100) {
        task.percentComplete = Math.min(100, task.percentComplete + increments[Math.floor(Math.random() * increments.length)]);
      } else {
        task.percentComplete = 0;
        task.status = 'Waiting';
      }
      _notifiers.task.forEach(function (notifier) {
        return notifier(task);
      });
    }
  });
}, 1000);

function addSession(token, data) {
  _sessions[token] = data;
}

function getSession(token) {
  return _sessions[token];
}

function addNotifier(type, cb) {
  _notifiers[type].push(cb);
}

function getTasks(filters) {
  if (filters) {
    return Promise.resolve({
      tasks: tasks.filter(function (task) {
        return Object.keys(filters).some(function (filter) {
          return task[filter] === filters[filter];
        });
      })
    });
  }
  return Promise.resolve({ tasks: tasks });
}

function getTask(id) {
  var task = void 0;
  tasks.some(function (t) {
    if (t.id === id) {
      task = t;
      return true;
    }
    return false;
  });
  return Promise.resolve({ task: task });
}

exports.default = { addNotifier: addNotifier, addSession: addSession, getSession: getSession, getTask: getTask, getTasks: getTasks };
//# sourceMappingURL=data.js.map