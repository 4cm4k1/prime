var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/students', function(request, response) {
    var students = [
        "Andrew Kolander",
        "Anthony Maki",
        "Brian Anderson",
        "Brian Verduzco",
        "Connor O'Gara",
        "Cormac Strahan",
        "Donovan Goertzen",
        "Hillary Manning",
        "Jon Wilson",
        "Justin Doty",
        "Katie Vogel",
        "Kyle Quamme",
        "Liz Kerber",
        "Megan Martinson",
        "Richard Camara",
        "Ryan Mattson",
        "Sahasha Reese",
        "Tracy Vincent",
        "Trent Johnson"
    ];
    console.log('Request to route received!');
    response.send(students);
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port', port, 'Ctrl-C to quit server');
});
