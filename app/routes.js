import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import HomePage from './containers/HomePage';

const appRoute = (
  <Route path="/" component={App}>

    {/* Load the homepage page by default */}
    <IndexRoute to="homepage" />
    {HomePage}

  </Route>
);

export default appRoute;
