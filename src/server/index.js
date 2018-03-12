// Dependencies
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import open from 'open';
import exphbs from 'express-handlebars';

// Express App
const app = express();

/*
 * APIs
 */
// Products
import productsApi from './api/products.js';
// dispatch
app.use('/api/products', productsApi);


// Config
import { server } from '../config';
const { views, serverPort, baseUrl } = server;

// Webpack configuration
import webpackConfig from '../../webpack.config.babel';

// Helpers
import * as hbsHelper from '../lib/handlebars';

// Utils
import { isMobile } from '../lib/utils/device';

// Environment
const isDevelopment = process.env.NODE_ENV !== 'production';

// Public (Static page)
//app.use(express.static(path.resolve(__dirname, './public')));

// Handlebars setup
app.engine(views.engine, exphbs({
  extname: views.extension,
  helpers: hbsHelper
}));

// View Engine Setup
app.set('views', path.resolve(__dirname, views.path));
app.set('view engine', views.engine);

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

// Sending all traffic to React
app.get('*', (req, res) => {
  res.render('frontend/index', {
    layout: false
  });
});

// Listen port
app.listen(serverPort, err => {
  if(!err){
    open(`${baseUrl}`);
  }
})
