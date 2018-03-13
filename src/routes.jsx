// Dependencies
import React from 'react';
import { Route, Switch, browserHistory } from 'react-router-dom';

// Helpers
import { PropsRoute } from 'lib/helpers';

// Grls
import App from './App';
import Page404 from './App/Page404';

// Sections
import Home from './App/sections/Home';
import Products from './App/sections/Products';

// Routes
const AppRoutes = props =>
  <App>
    <Switch>
      <PropsRoute exact path="/products" component={Products} />
      <PropsRoute exact path="/" component={Home} />
      <PropsRoute component={Page404} />
    </Switch>
  </App>

export default AppRoutes;
