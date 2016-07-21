//  requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//  route requires
var olympics = require('./routes/olympics.js');

//  body-parser config
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//  routing
app.use('/olympics', olympics);

//  serve statically 'public'
app.use(express.static('public'));

//  start server on port 3000
var server = app.listen(process.env.PORT || 3000, function() {
    var port = server.address().port;
    console.log('Listening on port', port, 'Ctrl-C to quit server');
});
