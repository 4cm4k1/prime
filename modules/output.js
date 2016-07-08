var random = require('./random');
var toUSD = require('./tousd');

var balance = function(randomNumber1, randomNumber2) {
    return toUSD(random(randomNumber1, randomNumber2));
};

var message = function() {
    return 'Account balance: \n';
}

module.exports = balance;
