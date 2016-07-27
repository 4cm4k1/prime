var fs = require('fs');

var numbersArray;

//Pulls in text file with numbers from file system and runs callback
function processFile(callback) {
    fs.readFile('numbers.txt', 'utf-8', callback);
}

//Callback function logs out the return of min, max, and avg functions
function done(err, fileContents) {
    if (err) {
        console.log('ERROR!', err);
    }
    numbersArray = fileContents.split(', ');
    console.log('Min:', minNumber(numbersArray));
    console.log('Max:', maxNumber(numbersArray));
    console.log('Avg:', avgNumber(numbersArray));
}

//Returns min number in an array
function minNumber(array) {
    return Math.min.apply(null, array);
}

//Returns max numbers in an array
function maxNumber(array) {
    return Math.max.apply(null, array);
}

//Returns avg of all array numbers
function avgNumber(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += parseInt(array[i]);
    }
    return Math.round(sum / array.length);
}

//Runs program
processFile(done);
