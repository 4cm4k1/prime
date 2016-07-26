var router = require('express').Router();

//  Item model
var Item = require('../models/items');

//  get (optional id parameter)
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
router.put('/:id', function(request, response) {
    //  Grab id and data from request
    var id = request.params.id;
    var data = request.body;

    //  Find entry in Mongo and update it
    Item.findByIdAndUpdate(id, data, function(err, item) {
        if (err) {
            console.log('Error updating item:', err);
            response.sendStatus(500);
        } else {
            response.sendStatus(200);
        }
    });
});

//  delete
router.delete('/:id', function(request, response) {
    //  Grab id from request
    var id = request.params.id;

    //  Find entry in Mongo and delete it
    Item.findByIdAndRemove(id, function(err, item) {
        if (err) {
            console.log('Error deleting item:', err);
            response.sendStatus(500);
        } else {
            response.sendStatus(200);
        }
    });
});

module.exports = router;
