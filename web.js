
var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    page = fs.readFileSync("index.html").toString();
    response.send(page);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
