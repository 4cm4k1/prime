var fs = require('fs');

var array;

function processFile(callback) {
    fs.readFile('numbers.txt', 'utf-8', callback);
}

function done(err, fileContents) {
    if (err) {
        console.log(err);
    }
    array = fileContents.split(', ');
    console.log(Math.min.apply(null, array), Math.max.apply(null, array));
}

processFile(done);
