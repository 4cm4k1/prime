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
  var toggleTask = {
    taskID: req.body.taskID,
    taskStatus: req.body.taskStatus,
  };

  var results = [];

  pg.connect(connectionString, function (err, client, done) {
    var query = client.query('UPDATE todo_list SET task_status = $1 WHERE id = $2 RETURNING *;',
    [toggleTask.taskStatus, toggleTask.taskID]);

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
