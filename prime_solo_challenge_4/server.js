var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port, 'Ctrl-C to quit server');
});
