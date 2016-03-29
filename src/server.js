'use strict';

const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const server = http.createServer(app);
const port = 8000;

app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render(path.join(__dirname, 'index.jade')));

app.get('/ping', (req, res) => res.json({success: true}));

app.get('/test', (req, res) => res.send('TEST'));

server.listen(8000, () => {console.log(`server is running on port: ${port}`)});
