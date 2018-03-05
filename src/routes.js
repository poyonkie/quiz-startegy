// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Grls
import App from './App';
import Page404 from './App/Page404';

// Sections
import Home from './App/sections/Home';
import Products from './App/sections/Products';

// Routes
const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/products" component={Products} />
      <Route exact path="/" component={Home} />
      <Route component={Page404} />
    </Switch>
  </App>

export default AppRoutes;
