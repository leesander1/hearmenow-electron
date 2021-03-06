// @flow
import React from 'react';
import { Link, Switch, Router, Route, IndexRoute, IndexRedirect } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import DialerPage from './containers/DialerPage';
import ContactsPage from './containers/ContactsPage';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import SettingsPage from './containers/SettingsPage.js';
import AuthorizedContainer from './containers/AuthorizedContainer';
import NavContainter from './containers/NavContainter';

export default (
  <Router>
    <Route path="/" component={App}>
      <IndexRedirect to="login" />
      <Route path="login" component={LoginPage} />
      <Route path="signup" component={SignUpPage} />
      <Route component={AuthorizedContainer}>
        <Route path="dashboard" component={NavContainter}>
          <Route path="home" component={HomePage} />
          <Route path="dialer" component={DialerPage} />
          <Route path="contacts" component={ContactsPage} />
          <Route path="settings" component={SettingsPage} />
        </Route>
      </Route>
    </Route>
  </Router>
);
