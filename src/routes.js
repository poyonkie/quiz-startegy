// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Brief from './components/Brief';
import Page404 from './components/Page404';

// Containers
import Home from './containers/Home';
import Gallery from './containers/Gallery';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/brief" component={Brief} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/gallery/:id" component={Gallery} />
      <Route exact path="/" component={Home} />
      <Route component={Page404} />
    </Switch>
  </App>

export default AppRoutes;
