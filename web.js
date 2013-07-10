var express = require('express');
var sys = require('sys');
var fs = require('fs');
var contents;
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    contents = fs.readFileSync('./index.html');
  response.send(contents);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});