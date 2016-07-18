var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port, 'Ctrl-C to quit server');
});
