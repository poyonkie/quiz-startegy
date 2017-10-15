// Dependences
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import open from 'open';

// Webpack configuration
import webpackConfig from '../../webpack.config.babel';

// Environment
const isDevelopment = process.env.NODE_ENV !== 'production';

// Server Port
const port = 3000;

// Express App
const app = express();

// Public
app.use(express.static(path.resolve(__dirname, '../public')));

// Webpack Compiler
const webpackCompiler = webpack(webpackConfig);

if (isDevelopment) {
  // Webpack Middlewares
  app.use(webpackDevMiddleware(webpackCompiler));
  app.use(webpackHotMiddleware(webpackCompiler));
}
// Sending all traffic to React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Listen port
app.listen(port, err => {
  if(!err){
    open(`http://localhost:${port}`);
  }
})
