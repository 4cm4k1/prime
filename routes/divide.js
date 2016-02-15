//  Weekend Challenge #3 - Anthony Maki - 2016-02-15
var express = require('express');
var router = express.Router();

router.post('/', function(req,res) {
    var resultBox = req.body;
    resultBox.equality = '=';
    resultBox.result = parseInt(resultBox.x) / parseInt(resultBox.y);
    console.log(resultBox);
    res.send(resultBox);
});

module.exports = router;