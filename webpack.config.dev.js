// Dependences
import webpack from 'webpack';
import path from 'path';

// Paths
const PATHS = {
  index: path.resolve(__dirname, 'src/index'),
  build: path.resolve(__dirname, '/dist'),
  base: path.resolve(__dirname, 'src')
}

// Webpack Config
export default {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    PATHS.index
  ],
  output: {
    path:  PATHS.build,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
        include: PATHS.base
      },
      {
        test: /(\.css)$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loaders: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
