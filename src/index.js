// Dependencies
import 'babel-polyfill';
import './polyfills';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Bluebird from 'bluebird';

// Routes
import AppRoutes from './routes';

// Assets
import './index.css';

// Redux store
import configureStore from './lib/configureStore';

// Reducers
import rootReducer from './reducers';

// Bluebird configuration
window.Promise = Bluebird;
Bluebird.config({ warning: false });
window.addEventListener('unhandledrejection', error => {
  error.preventDefault();

  if(process.env.NODE_ENV !== 'production') {
    console.warn('Unhandled Promise rejection warning', error.detail);
  }
});

// Config Redux store
const store = configureStore({
  initialState: window.initialState
}, rootReducer);

render(
  <Provider store={store}>
    <Router>
      <AppRoutes />
    </Router>
  </Provider>,
  document.getElementById('root'));
