//  requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//  routes
var index = require('./routes/index');
var assignments = require('./routes/assignments');

//  bodyParser config
app.use(bodyParser.json());

//  routing
app.use(express.static('public'));
app.use('/', index);
app.use('/assignments', assignments);

//  database
var db = mongoose.connect('mongodb://localhost/assignments').connection;

db.on('error', function(err) {
    console.log('MongoDB connection error:', err);
});

db.once('open', function() {
    console.log('Connected to MongoDB');
});

//  server on/port listening
var server = app.listen(process.env.PORT || 3000, function() {
    var port = server.address().port;
    console.log('Listening on port', port);
});
