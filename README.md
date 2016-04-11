# prime_peer_db_01
In this exercise you'll be creating a MongoDB application to store student assignment information, including the assignment name, the student's identity, their score on the assignment, and the date it was turned in. Only the identity and date completed are required.

The purpose of this exercise is to help understand the way Document Databases function, and how to interact with them. 

###Make sure MongoDB installed, and run mongod.
Run the command `mongod` from the terminal. If it fails, follow the [installation guide](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/).

###Install adminMongo
[Get it here.](https://github.com/mrvautin/adminMongo)

Use it. Love it.

###Create a new NodeJS application. 
Create a basic NodeJS application with an express server. Set up a router called index.js (for your home page) and also a router called assignment.js (for your assignment routes).

###Get connected to your database.
Put the following into your server side app.js file.

``` JavaScript
var mongoose = require('mongoose');

var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});
```

What does it do? The first line requires MongoDB and lets us use the Mongoose functions. The next is just a URL to the mongo database, which you set up earlier. The third connects to the database and a document store named `assignments` (this name is chosen by us) and returns an object that gives us access to the client. The "on error" function allows us to see a console log when it can't connect. The final "once open" function lets us know when it's connected. 

**REVIEW**

How to install the module
`npm install mongoose --save`

How to remove the module
`npm remove mongodb --save`

###Create an "Assignment" Model
In your Node application, create a folder called `models`. Within that folder create a mongoose model named `assignments` and give it some properties that an assignment would have. 

The minimum requirements are: assignment_number, student_name, score and date_completed. 

When creating your model it may be useful to see some [Mongoose Schema documentation](http://mongoosejs.com/docs/guide.html), and also to look at all of the [MongoDB Types](http://docs.mongodb.org/manual/reference/bson-types/)

###Create GET and POST routes for /assignments

Next you'll need to be able to access the assignments via an API. Use a combination of REST methods and Mongo methods to make a route for reading all assignments, and for creating new assignments.

*Hint:* Use req.body to access the x-www-url-formencoded data that is passed into the API. Also, be sure to test them with Atom REST client or cURL.

*Remember, in REST:*

To retrieve a resource, use GET. 
To create a resource on the server, use POST.
To change the state of a resource, use PUT.
To remove, delete or archive a resource, use DELETE.

###Display Assignments

On the index page, display the list of all assignments. The customer says that they may have more than one person working on the assignments at a time, so this list should update every 5 seconds. Only write this data to the DOM if it has changed since the last time it was checked. (hint: save it in a variable)

###Additional GET functionality

In addition, the route that reads all assignments should also accept an ID. When it receives the ID, it should be given to the mongoose function `Assignments.find` and return only that one. Otherwise if no ID is supplied, it should return all assignments.

###Tying it all together

Create an Ajax `<form>` that will create assignments using the /assignments POST route. (When you reload the page, it should have any new entries added.)

In your index file, display a list of all assignments that are in the database when the page loads.

##HARD MODE

Once you have that working add a button next to each assignment record. When the button is clicked, it will delete the record from the database using Ajax. You will need to create a DELETE route, and will need to use `Assignments.findByIdAndRemove`.  Feel free to break this into two steps (first find, then remove).

##PRO MODE

Finally, add another button to each record on the index that allows the user to update the database entry. This will also need to be done via Ajax. Updating should either be done in a modal window, or a `<form>` that shows/hides when the edit button is clicked. You will need to pass the assignment ID and the form data to a new PUT route, and to `Assignments.findByIdAndUpdate`, or alternatively, `Assignments.findById` followed by a `model.save()`.
