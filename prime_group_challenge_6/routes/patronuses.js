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
        client.query('SELECT * FROM patronuses', function(err, result) {
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

    var patronus = request.body.patronus; //  adjust for incoming object

    client.connect(function(err) {
        if (err) {
            console.log('ERROR: You need to think of a time you were truly happy...', err);
        }
        client.query('INSERT INTO patronuses (patronus_name) VALUES ($1) RETURNING *', [patronus], function(err, result) {
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
