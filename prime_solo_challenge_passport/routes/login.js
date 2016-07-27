var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

router.get('/', function(request, response, next) {
    response.sendFile(path.resolve(__dirname, '../public/views/login.html'));
});

router.get('/', function(request, response, next) {
    response.json(request.isAuthenticated());
});

router.post('/', passport.authenticate('local', {
    successRedirect: '/views/success.html',
    failureRedirect: '/views/failure.html'
}));

module.exports = router;
