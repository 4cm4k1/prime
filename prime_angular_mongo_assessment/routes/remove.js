var express = require('express');
var router = express.Router();
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var existingHero = mongoose.model('Hero');

router.delete('/:id', function(req, res) {
  existingHero.findByIdAndRemove({"_id": req.params.id}, function(err, data) {
    if(err) {
      console.log('ERR: ', err);
    } else {
      res.send(true);
    }
  });
});

router.get('/', function(req, res) {
  existingHero.find({}, function(err, data) {
    if(err) {
      console.log('ERR: ', err);
    }
    res.send(data);
  });
});

module.exports = router;
