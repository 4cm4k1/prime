var express = require("express");
var app = express();
var path = require('path');


// Routes
app.get("/data", function(req,res,next){
    res.sendFile(path.join(__dirname, "./public/data/data.json"));
});


// Catch-all/Static files
app.get("/*", function(req,res,next){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "./public/", file))
});


// start server on given port
app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), function(req,res,next){
    console.log("Listening on port: " + app.get("port"));
});

module.exports = app;