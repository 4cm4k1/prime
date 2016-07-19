var router = require('express').Router();
var pg = require('pg');
var config = {
    database: "twittergen",
    port: 5432
};


router.get('/', function(request, response) {
    var client = new pg.Client(config);

    client.connect(function(err) {
        if (err) {
            console.log("there was a problem", error);
        }
        client.query("SELECT * FROM nouns", function(err, result) {
            if (err) {
                console.log("there was another problem", error);
            } else {
              // response.send =
                console.log(result.rows);
                console.log("Go team!");
                response.send(result.rows);
            };
            client.end(function(err) {
                if (err) {
                    console.log("There was a disconnection problem!")
                }
            })
        });

    });
});



module.exports = router;
