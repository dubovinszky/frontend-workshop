'use strict';

const path = require('path');

module.exports = {
  entry: path.join(__dirname, '../src/app/app.js'),
  output: {
    path: path.join(__dirname, '../src/public/dist'),
    filename: 'app.js'
  },
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
  }
};
