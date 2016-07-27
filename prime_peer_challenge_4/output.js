var random = require('./random');
var toUSD = require('./tousd');

var balance = function() {
    return toUSD(random(100,1000000));
};

var message = function() {
    return 'Account balance: \n';
}

exports.balance = balance;
exports.message = message;