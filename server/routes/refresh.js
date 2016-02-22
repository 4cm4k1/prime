//  Dependencies
var express = require('express');
var router = express.Router();
var pg = require('pg');

//  Database config
var connectionString = '';
if (process.env.DATABASE_URL !== undefined) {
  connectionString = process.env.DATABASE_URL + 'ssl';
} else {
  connectionString = 'postgres://localhost:5432/prime_weekend_04_todo';
}

//  Comment goes here
router.get('/', function (req, res) {
  var results = [];

  pg.connect(connectionString, function (err, client, done) {
    var query = client.query('SELECT * FROM todo_list ORDER BY task_status ASC;');

    query.on('row', function (row) {
      results.push(row);
    });

    query.on('end', function () {
      client.end();
      return res.json(results);
    });

    if (err) {
      console.log(err);
    }
  });
});

module.exports = router;
