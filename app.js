var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mongo_lecture');
mongoose.model('Person', new Schema(
    {
        "name": String, "location": String
    },
    {
        collection: "people"
    }
));

var Person = mongoose.model('Person');

app.get("/data", function(req, res) {
    // return people from DB, send to client
    Person.find({}, function(err, data) {
        if(err) {
            console.log("Error: ", err);
        }
        res.send(data);
    });
});

app.post('/data', function(req, res) {

    var person = new Person(
        {
            name: req.body.name,
            location: req.body.location
        }
    );

    Person.save();

    res.send('done');

});


// Serve back static files
app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});


/*
 var query = req.query.peopleSearch;
 if(query) {
 Person.find({name: query}, function(err, data) { // class example
 // 'like' matching
 //Person.find({name: new RegExp(query.valueOf(), "i")}, function(err, data) {
 if(err) {
 console.log("Error: ", err);
 }
 res.send(data);
 });
 } else {
 Person.find({}, function(err, data) {
 if(err) {
 console.log("Error: ", err);
 }
 res.send(data);
 });
 }*/