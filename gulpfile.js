'use strict';

const gulp = require('gulp');
const tools = require('urbanjs-tools');

tools.initialize(gulp, {
  checkFileNames: true,
  eslint: true,
  jest: true,
  jscs: true,
  jsdoc: true,
  nsp: true,
  retire: true,
  webpack: () => require('./gulp/webpack.config.js')
});

gulp.task('default', () => {
  console.log('Not configured. See gulpfile.js'); // eslint-disable-line no-console
});
