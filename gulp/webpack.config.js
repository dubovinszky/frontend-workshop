'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      path.join(__dirname, '../src/app/app.js'),
    ]
  },
  output: {
    path: path.join(__dirname, '../src/public/dist'),
    publicPath: '/dist/',
    filename: 'app.js'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader:'babel-loader',
        exclude: /(node_modules|bower_components|vendor)/,
        query: require('./babel-config'),
      },
      {
        test: /\.html$/,
        loader: 'raw-loader!html-minify-loader',
      },
      {
        test: /\.(scss|css)/,
        loader: 'style-loader!css-loader!sass-loader'
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
