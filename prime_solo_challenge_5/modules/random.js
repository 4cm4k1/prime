var randomNumber = function(min, max) {
    console.log(min, max);
    var something = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("answer: ", something);
    return something;
};

module.exports = randomNumber;
