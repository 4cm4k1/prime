//  requires
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var index = require('./routes/index');
var list = require('./routes/list');

//  variables
var app = express();

//  config
app.use(express.static('public'));
app.use(bodyParser.json());

//  routes
app.use('/', index);
app.use('/list', list);

//  database
var db = mongoose.connect('mongodb://localhost/groceryListApp').connection;

db.on('error', function(err){
  console.log('MongoDB connection error:', err);
});

db.once('open', function(){
  console.log('Connected to MongoDB');
});

//  server
var server = app.listen(process.env.PORT || 3000, startServer);

function startServer(){
  var port = server.address().port;
  console.log('Listening on port', port, 'Ctrl-C to kill server');
}
