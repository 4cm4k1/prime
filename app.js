//  Weekend Challenge #3 - Anthony Maki - 2016-02-15
console.log('I am working!');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var add = require('./routes/add');
var subtract = require('./routes/subtract');
var multiply = require('./routes/multiply');
var divide = require('./routes/divide');

app.use(bodyParser.urlencoded({extended: true}));
app.set('port', process.env.PORT || 5000);

app.use('/add', add);
app.use('/subtract', subtract);
app.use('/multiply', multiply);
app.use('/divide', divide);

app.get('/*', function(req,res) {
    console.log('Here is the request: ', req.params);
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, './public/', file));
});

app.listen(app.get('port'), function(){
    console.log('Server is ready on port ' + app.get('port'));
});

