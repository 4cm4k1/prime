var router = require('express').Router();

//  Assignment model
var Assignment = require('../models/assignments');

//  GET route (with optional ID parameter; otherwise, show all)
router.get('/:id?', function(request, response) {
    //  Check if optional id parameter was given
    if (id) {
        //  Fetch the assignment with that id and send back
        Assignment.find({
            "_id": id
        }, function(err, assignments) {
            if (err) {
                console.log('Error finding assignments:', err);
                response.sendStatus(500);
            } else {
                response.send(assignments);
            }
        });
    } else {
        //  Fetch all assignments and send back
        Assignment.find({}, function(err, assignments) {
            if (err) {
                console.log('Error finding assignments:', err);
                response.sendStatus(500);
            } else {
                response.send(assignments);
            }
        });
    }
});

//  POST route
router.post('/', function(request, response) {
    //  Grab data from request
    var data = request.body;

    //  Create a newAssignment instance from that data
    var newAssignment = new Assignment({
        assignment_number: data.assignmentNumber,
        student_name: data.studentName,
        score: data.score,
        date_completed: new Date()
    });
    //  Save that instance to MongoDB in the 'assignments' collection
    newAssignment.save(function(err) {
        if (err) {
            console.log('Error saving assignment:', err);
            response.sendStatus(500);
        } else {
            response.sendStatus(200);
        }
    });
});

module.exports = router;
