var router = require('express').Router();
var pg = require('pg');
var config = {
    database: 'patronusRegistry',
    port: 5432
};


router.get('/', function(request, response) {
    var client = new pg.Client(config);

    client.connect(function(err) {
        if (err) {
            console.log('ERROR: You need to think of a time you were truly happy...', err);
        }
        client.query('SELECT * FROM people', function(err, result) {
            if (err) {
                console.log('ERROR: Really, try to think happy...', err);
            } else {
                response.send(result.rows);
            };
            client.end(function(err) {
                if (err) {
                    console.log('ERROR: Your patronus incantation was interrupted...', err);
                }
            })
        });

    });
});

router.post('/', function(request, response) {
    var client = new pg.Client(config);
    console.log(request.body.person);
    var data = request.body.person;

    var person = {
      firstName: data.split(" ")[0],
      lastName: data.split(" ")[1]
    }; //  adjust for incoming object
    console.log('rjm:::', person);
    client.connect(function(err) {
        if (err) {
            console.log('ERROR: You need to think of a time you were truly happy...', err);
        }
        client.query('INSERT INTO people (first_name, last_name) VALUES ($1, $2)', [person.firstName, person.lastName], function(err, result) {
            if (err) {
                console.log('ERROR: Really, try to think happy...', err);
            } else {
                response.send(result.rows);
            };
            client.end(function(err) {
                if (err) {
                    console.log('ERROR: Your patronus incantation was interrupted...', err);
                }
            })
        });

    });
});

module.exports = router;
