const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

require('babel-polyfill');

const baseWebpackConfig = require('./webpack.client.config');

const webpackConfig = merge(baseWebpackConfig, {
  target: 'node',
  entry: {
    app: ['babel-polyfill', './src/client/entry-server.js']
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2'
  },
  externals: Object.keys(require('./package.json').dependencies),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': 'production'
    })
  ]
});
module.exports = webpackConfig;
