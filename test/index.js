var _ = require("lodash");
var express = require('express');
var bodyParser = require('body-parser');
var assert = require("assert");


var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname +'/www'));
app.use('/js', express.static(__dirname +'/../bower_components/'));
app.use('/src', express.static(__dirname +'/../js/lib/'));
app.use('/dummy', express.static(__dirname +'/dummy/'));

var port = process.env.PORT | 3000
app.listen(port, function () {
  console.log('QB app listening on port '+port);
});


