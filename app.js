var http = require('http');
var output = require('./output');

http.createServer(function(req,res){
    res.writeHead(200);
    res.write(output.message() + output.balance());
    res.end();
}).listen(3000);

console.log('Listening on port 3000');