var express = require('express');
var app = express();
var index = require('./routes/index');

app.use('/', index);
app.use(express.static('server/public'));

var server = app.listen(3000, function() {
	var port = server.address().port;
	console.log('Listening on port', port);
});
