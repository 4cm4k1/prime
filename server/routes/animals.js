var express = require('express');
var router = express.Router();
var pg = require('pg');
var random = require('./random.js');
var connectionString = '';

if (process.env.DATABASE_URL !== undefined) {
  connectionString = process.env.DATABASE_URL + 'ssl';
} else {
  connectionString = 'postgres://localhost:5432/prime_node_express_sql_assessment';
}

//  This responds to any PUT request directed towards /animals
router.put('/', function (req, res) {

  var animal = {
    kind: req.body['animal-type'],
    quantity: random(1,100),
  };

  var results = [];

  pg.connect(connectionString, function (err, client, done) {
    var query = client.query('INSERT INTO zoo_animals (animal_type, quantity) VALUES ($1, $2) RETURNING *;',
    [animal.kind, animal.quantity]);

    query.on('end', function () {
      client.end();
      return res.json(results);
    });

    if (err) {
      console.log(err);
    }
  });
});

//  This responds to any GET request directed towards /animals
router.get('/', function (req, res) {
  var results = [];

  pg.connect(connectionString, function (err, client, done) {
    var query = client.query('SELECT * FROM zoo_animals ORDER BY quantity DESC;');

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
