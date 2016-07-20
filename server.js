//  requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//  route requires
var people = require('./routes/people.js');
var patronuses = require('./routes/patronuses.js');

//  body-parser config
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//  routing
app.use('/people', people);
app.use('/patronuses', patronuses);

//  serve statically 'public'
app.use(express.static('public'));

//  start server on port 3000
var server = app.listen(process.env.PORT || 3000, function() {
    var port = server.address().port;
    console.log('The Trace is listening on port', port, 'Ctrl-C to apparate from server');
});
