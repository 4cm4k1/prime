var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect('mongodb://localhost/mongo_lecture');
mongoose.model(
    'Person',
    new Schema({
        "name": String,
        "location": String
    },
    {
        collection: 'people'
    }
));

var Person = mongoose.model('Person');

app.get('/person', function(req, res) {
    console.log('here');
    Person.find({}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    });
});

app.post('/person', function(req, res) {
    var addedPerson = new Person({
        "name": req.body.name,
        "location": req.body.location
    });

    addedPerson.save(function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        Person.find({}, function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }

            res.send(data);
        });
    });


});

app.delete('/person/:id', function(req, res) {
    Person.findByIdAndRemove({"_id" : req.params.id}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    });
});

app.put('/person/:id', function(req, res){
    var newName = req.body.name;
    Person.findByIdAndUpdate(
        {_id: req.params.id},
        {
            $set: {name: newName}
        },
        function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }

            res.send(data);
        }
    );

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