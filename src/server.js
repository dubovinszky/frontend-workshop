'use strict';

const _ = require('lodash');
const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const server = http.createServer(app);
const config = require('../config/config.js');
const port = config.port;
const env = config.env;

app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render(path.join(__dirname, 'index.jade')));

app.get('/ping', (req, res) => res.json({success: true}));

app.get('/test', (req, res) => res.send('TEST'));

if(env === 'development') {
  const url = require('url');
  const proxy = require('express-http-proxy');
  const proxyRules = require('../config/dev-proxy-rules');
  _.forEach(proxyRules, (msDevUrl, msPrefix) => app.use(msPrefix, proxy(msDevUrl, {
    forwardPath(req) {
      return url.parse(req.url).path;
    }
  })));
}

server.listen(8000, () => {console.log(`server is running on port: ${port}`)});
