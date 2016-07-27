var router = require('express').Router();

//  Assignment model
var Assignment = require('../models/assignments');

//  GET route (with optional ID parameter; otherwise, show all)
router.get('/:id?', function(request, response) {
    var id = request.params.id;
    //  Check if optional id parameter was given
    if (id) {
        //  Fetch the assignment with that id and send back
        Assignment.findById(id, function(err, assignments) {
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
    console.log(request.body);
    //  Grab data from request
    var data = request.body;

    //  Create a newAssignment instance from that data
    var newAssignment = new Assignment({
        assignment_number: data.assignmentNumber,
        student_name: data.studentName,
        score: data.score,
        date_completed: data.dateCompleted
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

router.delete('/:id', function(request, response){
  var id = request.params.id;
  Assignment.findByIdAndRemove(id, function(err, assignments){
    if (err) {
        console.log('Error deleting assignment:', err);
        response.sendStatus(500);
    } else {
        response.sendStatus(200);
    }
  });
});

module.exports = router;
