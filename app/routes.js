import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Dashboard from './routes/Dashboard';

const appRoute = (
  <Route path="/" component={App}>

    {/* Load the homepage page by default */}
    <IndexRoute to="dashboard" />
    {Dashboard}

  </Route>
);

export default appRoute;
