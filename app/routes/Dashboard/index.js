import React from 'react';
import { Route } from 'react-router';

import Dashboard from './components/Dashboard.js';

const dashboardRoute = (
  <Route path="dashboard" component={Dashboard} />
);

export default dashboardRoute;
