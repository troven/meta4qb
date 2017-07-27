var _ = require("lodash");
var express = require('express');
var bodyParser = require('body-parser');
var assert = require("assert");

var cwd = __dirname;
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname +'/www'));
app.use('/bower_components/', express.static(__dirname +'/../bower_components/'));
app.use('/bower_components/meta4qb/', express.static(__dirname +'/../js/lib/'));
app.use('/data', express.static(__dirname +'/data/'));

var port = process.env.PORT | 3002
app.listen(port, function () {
  console.log('[meta4qb] app port: %s -> %s ',port, cwd);
});


