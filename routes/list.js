var router = require('express').Router();

//  Item model
var Item = require('../models/items');

//  get
router.get('/:id?', function(request, response) {
    var id = request.params.id;

    if (id) {
        //  Fetch the item with that id and send back
        Item.findById(id, function(err, items) {
            if (err) {
                console.log('Error finding items:', err);
                response.sendStatus(500);
            } else {
                response.send(items);
            }
        });
    } else {
        //  Fetch all items and send back
        Item.find({}, function(err, items) {
            if (err) {
                console.log('Error finding items:', err);
                response.sendStatus(500);
            } else {
                response.send(items);
            }
        });
    }
});

//  post
router.post('/', function(request, response) {
    //  Grab data from request
    console.log(request.body);
    var data = request.body;

    //  Create a newItem instance from that data
    var newItem = new Item({
        name: data.name,
        qty: data.qty
    });
    //  Save that instance to MongoDB in the 'items' collection
    newItem.save(function(err) {
        if (err) {
            console.log('Error saving item:', err);
            response.sendStatus(500);
        } else {
            response.sendStatus(200);
        }
    });
});

//  put

//  delete

module.exports = router;
