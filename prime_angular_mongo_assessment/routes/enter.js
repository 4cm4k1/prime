var express = require('express');
var router = express.Router();
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

mongoose.model(
  'Hero',
  new Schema({
    "alias": String,
    "first_name": String,
    "last_name": String,
    "city": String,
    "power_name": String
  },
  {
    collection: 'Heroes'
  })
);

var Hero = mongoose.model('Hero');

router.post('/', function(req, res) {
  console.log('Request body is: ', req.body);
  var newHero = new Hero({
    "alias": req.body.alias,
    "first_name": req.body.first_name,
    "last_name": req.body.last_name,
    "city": req.body.city,
    "power_name": req.body.power_name.power_name
  });

  newHero.save(function(err, data) {
    if(err) {
      console.log('ERR: ', err);
    } else {
      res.send(true);
    }
  });
});

mongoose.model(
  'SuperPower',
  new Schema({
    "power_name": String
  },
  {
    collection: 'SuperPowers'
  })
);

var SuperPower = mongoose.model('SuperPower');

router.get('/', function(req, res) {
  SuperPower.find({}, function(err, data) {
    if(err) {
      console.log('ERR: ', err);
    }
    res.send(data);
  });
});

module.exports = router;
