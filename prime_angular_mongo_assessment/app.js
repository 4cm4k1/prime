var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require ('mongoose');

var enter = require('./routes/enter');
var remove = require('./routes/remove');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/** ---------- MONGOOSE CONNECTION HANDLING ---------- **/
var dbURI = 'mongodb://localhost:27017/prime_angular_mongo_assessment';

mongoose.connect(dbURI);

// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

app.use('/enter', enter);
app.use('/remove', remove);

app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set('port', process.env.PORT || 4242);
app.listen(app.get('port'), function() {
  console.log('Listening on port: ', app.get('port'));
});
