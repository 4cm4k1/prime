# prime_peer_db_01
In this exercise you'll be creating a MongoDB application to store student assignment information. The purpose of this exercise is to help understand the way Document Databases function, and how to interact with them.

###Make sure MongoDB installed, and run mongod.
Run the command `mongod` from the terminal. If it fails, follow the [installation guide](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/).

###Install Robomongo
[Get it here.](http://robomongo.org/)

Use it. Love it.

###Create a new NodeJS application. 
Create a basic NodeJS application with an express server. Update the index file so that `res.render` sends an object with an array of placeholder assignments. Use this to get your index page to load the way you want.

###Get connected to your database.
Put the following into your server side app.js file.

``` JavaScript
var mongoose = require('mongoose');

var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function (err) {
    console.log('mongodb connection error', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open');
});
```

What does it do? The first line requires MongoDB and lets us use the Mongoose functions. The next is just a URL to the mongo database, which you set up earlier. The third gives connects to the database and a document store named `assignments` and returns an object that gives us access to the client. The "on error" function allows us to see a console log when it can't connect. The final "once open" function lets us know when it's connected. 

**REVIEW**

How to install the module
`npm install mongoose --save`

How to remove the module
`npm remove mongodb --save`

###Create a "Assignment" Model
In your Node application, create a folder called `models`. Within that folder create a mongoose model named `assignments` and give it some properties that an assignment would have. The minimum requirements are a student_name, score, date_completed. The more, the better!

See some [Mongoose Schema documentation](http://mongoosejs.com/docs/guide.html).
Also, look at all of the [MongoDB Types](http://docs.mongodb.org/manual/reference/bson-types/)

###Create a CRUD operations for the model.

Use a combination of REST methods and Mongo methods to make a Create, Update, Read and Delete route for /assignments. 

*Remember, in REST*:

To retrieve a resource, use GET. 
To create a resource on the server, use POST.
To change the state of a resource, use PUT.
To remove, delete or archive a resource, use DELETE.

**Use postman to test each method.**

###Tying it all together

Create an Ajax form that will create the entries using the /assignments route. When you reload the page, it should have any new entries added. 

In your index file, display a list of all assignments that are in the database when the page loads. You can handle this using the template rendering engine (no need to make an Ajax call).

Once you have that working add a button next to each assignment record. When the button is clicked, it will delete the record from the database using Ajax.

##HARD MODE

When a user adds an assignment, automatically update the list using an Ajax GET request. Do this by clearing the existing list out and fill it in with the results from the Ajax call. 

Do not do this by simply appending the item to the list! 

Create a timer that automatically updates the results list every minute. Then, open a new browser and add an entry. Watch the other page automatically add your results! Wow!

##PRO MODE

Finally, add another button to each record on the index that allows the user to update the database entry. This will also need to be done via Ajax. 
