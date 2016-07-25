var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basic_walking_skeleton');

var Cat = mongoose.model('Cat', {name:String});

router.get('/', function(req, res) {
  console.log('Here is a console log');
  res.send('Hello World!');
});

module.exports = router;
