var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pg = require('pg');

var connectionString = '';
if (process.env.DATABASE_URL !== undefined) {
  connectionString = process.env.DATABASE_URL + 'ssl';
} else {
  connectionString = 'postgres://localhost:5432/prime_solo_joins';
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/data', function(req, res) {
  var results = [];

  pg.connect(connectionString, function(err, client, done) {
    var query = client.query('SELECT customers.*, COUNT(orders.id) ' +
    'FROM customers JOIN addresses ON (customers.id = addresses.customer_id) ' +
    'LEFT OUTER JOIN orders ON (orders.address_id = addresses.id) GROUP BY customers.id;');

    query.on('row', function(row) {
      results.push(row);
    });

    query.on('end', function() {
      client.end();
      console.log(results);
      return res.json(results);
    });

    if (err) {
      console.log(err);
    }
  });
});

app.post('/data/:customerID', function(req, res) {
    console.log('This is the getOrders request: ', req.params.customerID);
    var showOrder = req.body.customerID;
    var results = [];

    pg.connect(connectionString, function(err, client, done) {
      var query = client.query('SELECT orders.id AS "order_id", ' +
      '(products.unit_price * line_items.quantity) AS "item_total", ' +
      'products.description, products.unit_price, line_items.quantity, ' +
      'addresses.street, addresses.city, addresses.state, addresses.zip, ' +
      'addresses.address_type, customers.id AS "customer_id" FROM products ' +
      'JOIN line_items ON line_items.product_id = products.id JOIN orders ON ' +
      'orders.id = line_items.order_id JOIN addresses ON addresses.id = ' +
      'orders.address_id JOIN customers ON customers.id = ' +
      'addresses.customer_id WHERE customer_id = $1 GROUP BY orders.id, ' +
      'products.id, line_items.id, addresses.id, customers.id;',
      [showOrder]);

      query.on('row', function(row) {
        results.push(row);
      });

      query.on('end', function() {
        client.end();
        console.log(results);
        return res.json(results);
      });

      if (err) {
        console.log(err);
      }
    });
});

app.use(express.static('server/public'));
app.use(express.static('server/public/views'));
app.use(express.static('server/public/vendors'));
app.use(express.static('server/public/scripts'));
app.use(express.static('server/public/styles'));

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
  console.log('Listening on port: ', app.get('port'));
});
