// Dependences
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import open from 'open';
import exphbs from 'express-handlebars';

// Webpack configuration
import webpackConfig from '../../webpack.config.babel';

// API
import membersApi from './api/members.js';

// Helpers
import * as hbsHelper from '../lib/handlebars';

// Utils
import { isMobile } from '../lib/utils/device';

// Environment
const isDevelopment = process.env.NODE_ENV !== 'production';

// Server Port
const port = 3000;

// Express App
const app = express();

// Public
app.use(express.static(path.resolve(__dirname, '../public')));

// Handlebars setup
app.engine('.hbs', exphbs({
  extname: '.hbs',
  helpers: hbsHelper
}));

// View Engine Setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', '.hbs');

// Webpack Compiler
const webpackCompiler = webpack(webpackConfig);

if (isDevelopment) {
  // Webpack Middlewares
  app.use(webpackDevMiddleware(webpackCompiler));
  app.use(webpackHotMiddleware(webpackCompiler));
}

// Device detector
app.use((req, res, next) => {
  res.locals.isMobile = isMobile(req.headers['user-agent']);
  return next();
});

// API dispatch
app.use('/api/members', membersApi);

// Sending all traffic to React
app.get('*', (req, res) => {
  res.render('frontend/index', {
    layout: false
  });
});

// Listen port
app.listen(port, err => {
  if(!err){
    open(`http://localhost:${port}`);
  }
})
