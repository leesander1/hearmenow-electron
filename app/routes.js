// @flow
import React from 'react';
import { Link, Switch,Router, Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import DialerPage from './containers/DialerPage';


export default (
  <Router>
    <Route path="/" component={App}>
      <Route path="home" component={HomePage} />
      <Route path="dialer" component={DialerPage} />
    </Route>
  </Router>
);
