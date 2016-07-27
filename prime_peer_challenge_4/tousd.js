var toUSD = function(number) {
    return number.toLocaleString('en-EN', { style: 'currency', currency: 'USD'});
};

module.exports = toUSD;