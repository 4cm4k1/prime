var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// bring in pg module
var pg = require('pg');
var connectionString = '';
if(process.env.DATABASE_URL != undefined) {
    connectionString = process.env.DATABASE_URL + 'ssl';
} else {
    connectionString = 'postgres://localhost:5432/node-app';
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// get data route
app.get('/people', function(req, res) {
    var results = [];
    pg.connect(connectionString, function(err, client, done) {
        var query = client.query('SELECT * FROM people ORDER BY id DESC;');

        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        // close connection
        query.on('end', function() {
            client.end();
            return res.json(results);
        });

        if(err) {
            console.log(err);
        }
    });
});

app.post('/people', function(req, res) {
    var addPerson = {
        name: req.body.name,
        address: req.body.address
    };

    pg.connect(connectionString, function(err, client) {
        client.query("INSERT INTO people (name, address) VALUES ($1, $2) RETURNING id",
            [addPerson.name, addPerson.address],
            function (err, result) {
                if(err) {
                    console.log("Error inserting data: ", err);
                    res.send(false);
                } else {
                    res.send(result);
                }
            });
    });

});

app.get('/*', function(req, res) {
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, './public', file));
});


app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});