var express = require('express');
var path = require('path');
var adjectives = require('./routes.adjectives.js')
var nouns = require('./routes.nouns.js')

var app = express();

app.get('/', function(request, response){
  response.sendFile(path.join(__dirname, './public/views/index.html'));
})

app.use(express.static('public'));

// routers
app.use('/adjectives', adjectives);
app.use('.nouns', nouns);

var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});
