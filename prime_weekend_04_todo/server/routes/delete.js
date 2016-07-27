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
router.post('/', function (req, res) {
  var deleteTask = {
    taskID: req.body.taskID,
  };

  var results = [];

  pg.connect(connectionString, function (err, client, done) {
    var query = client.query('DELETE FROM todo_list WHERE id = $1 RETURNING *;',
    [deleteTask.taskID]);

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
