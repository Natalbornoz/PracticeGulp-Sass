'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var server = http.createServer(app);

app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.use(express.static('./'));

server.listen(3000, 'localhost');

server.on('listening', function() {
  console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});
