//  Dependencies
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');

//  Body-parser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true,}));

//  Port config
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('Listening on port: ', app.get('port'));
});

//  Database config
var connectionString = '';
if (process.env.DATABASE_URL !== undefined) {
  connectionString = process.env.DATABASE_URL + 'ssl';
} else {
  connectionString = 'postgres://localhost:5432/prime_weekend_04_todo';
}

//  Route assignments
//  Something will go here
var refresh = require('./routes/refresh');
var add = require('./routes/add');
var toggle = require('./routes/toggle');
var deleteTask = require('./routes/delete');

//  Actual routing
app.use('/refresh', refresh);
app.use('/add', add);
app.use('/toggle', toggle);
app.use('/delete', deleteTask);

//  Fallback routing
app.get('/*', function (req, res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, './public', file));
});
