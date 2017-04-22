// @flow
import React from 'react';
import { Router, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import DialerPage from './containers/DialerPage';
import ContactsPage from './containers/ContactsPage';
import Settings from './components/Settings';

export default (
  <Router>
    <Route path="/" component={App}>
      <Route path="home" component={HomePage} />
      <Route path="dialer" component={DialerPage} />
      <Route path="contacts" component={ContactsPage} />
      <Route path="settings" component={Settings} />
    </Route>
  </Router>
);
