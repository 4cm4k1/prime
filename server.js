var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var output = require('./modules/output');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/balance', function(request, response){
  console.log(request.body);
  var min = Number(request.body.min);
  var max = Number(request.body.max);
  console.log('min', min, 'max', max);
  var randomBalance = output(min,max);
  console.log('balance: ', randomBalance);
  response.send(randomBalance);
});

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port, 'Ctrl-C to quit server');
});
