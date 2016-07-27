var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');

//  Mah routes
var animals = require('./routes/animals.js');

//  I can haz database?
var connectionString = '';
if (process.env.DATABASE_URL !== undefined) {
  connectionString = process.env.DATABASE_URL + 'ssl';
} else {
  connectionString = 'postgres://localhost:5432/prime_node_express_sql_assessment';
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true, } ) );

//  Request to '/animals' get directed to the animal route
app.use('/animals', animals);



//  Anything else goes to index.html or direct file path
app.get('/*', function (req, res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, './public', file));
});

//  Mah port
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('Listening on port: ', app.get('port'));
});
