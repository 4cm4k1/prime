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
  var addTask = {
    taskDesc: req.body.taskDesc,
  };

  var results = [];

  pg.connect(connectionString, function (err, client, done) {
    var query = client.query('INSERT INTO todo_list (task_description) VALUES ($1) RETURNING *;',
    [addTask.taskDesc]);

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
