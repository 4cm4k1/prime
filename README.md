# prime_peer_db_01
In this exercise you'll be creating a MongoDB application to store customer information. The purpose of this exercise is to help understand the way Document Databases function, and how to interact with them.

###Make sure MongoDB installed, and run mongod.
Run the command `mongod` from the terminal. If it fails, follow the [installation guide](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/).

###Install Robomongo
[Get it here.](http://robomongo.org/)

Use it. Love it.

###Create a new NodeJS application. 
Create a basic NodeJS application with an express server. Add an index file as well. Make sure you add an app.get to send your index file!

``` JavaScript
app.get('/', function(request, response){
    response.sendfile('index.html');
});
```

###Get connected to your database.
Put the following into your server side js file (I typically call mine server.js, and a lot of people use app.js)

``` JavaScript
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/clientDb", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});
```

What does it do? The first line requires MongoDB and gives us access to the client. The second function connects to the database and a document store named `clientDb`. 

###Create a "Assignment" Model
In your Node application, create a folder called `models`. Within that folder create a model named `assignments` and give it some properties that an assignment would have. The minimum requirements are a student name, score, date_completed. The more, the better!

###Create a CRUD operations for the model.

Use a combination of REST methods and Mongo methods to make a Create, Update, Read and Delete method. 

**Use postman to test each method.**

###Tying it all together

In your index file, display a list of all assignments when the page loads. 

Once you have that working add a button next to each assignment record. When the button is clicked will delete the record from the database using Ajax.

##HARD MODE

Add another file called `create.html`. Add a form for creating new records using a form postback. Make sure you specify `method="post"` in the form tag.

##PRO MODE

Finally, add another button to each record on the index that allows the user to update the database entry. This can either be done via ajax or in a form on a new page.

Final, allow users to update 
