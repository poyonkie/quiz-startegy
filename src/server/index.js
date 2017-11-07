// Dependencies
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import open from 'open';
import exphbs from 'express-handlebars';

// Config
import config from '../config';

// Webpack configuration
import webpackConfig from '../../webpack.config.babel';

// API
import membersApi from './api/members.js';
import galleryApi from './api/gallery.js';

// Helpers
import * as hbsHelper from '../lib/handlebars';

// Utils
import { isMobile } from '../lib/utils/device';

// Environment
const isDevelopment = process.env.NODE_ENV !== 'production';

// Express App
const app = express();

// Public
app.use(express.static(path.resolve(__dirname, '../public')));

// Handlebars setup
app.engine(config.views.engine, exphbs({
  extname: config.views.extension,
  helpers: hbsHelper
}));

// View Engine Setup
app.set('views', path.resolve(__dirname, config.views.path));
app.set('view engine', config.views.engine);

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
app.use('/api/gallery', galleryApi);

// Sending all traffic to React
app.get('*', (req, res) => {
  res.render('frontend/index', {
    layout: false
  });
});

// Listen port
app.listen(config.serverPort, err => {
  if(!err){
    open(`${config.baseUrl}`);
  }
})
