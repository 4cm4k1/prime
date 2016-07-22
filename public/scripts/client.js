var app = angular.module('assignmentTracker', []);

app.controller('AssignmentCtrl', ['$http', function($http){
  var vm = this;

  vm.getAssignment = function(){
    $http.get('/assignments').then(handleGetAssignmentSuccess, handleFailure);
  };

  vm.postAssignment = function(){
    //  Grabs inputs from DOM
    var data = {
      assignmentNumber: vm.assignmentNumber,
      studentName: vm.studentName,
      score: vm.score,
      dateCompleted: vm.dateCompleted
    };
    //  Posts to route
    $http.post('/assignments', data).then(handlePostAssignmentSuccess, handleFailure);
  };

  vm.deleteAssignment = function(_id){
    $http.delete('/assignments/' + _id).then(handleDeleteAssignmentSuccess, handleFailure);
  };

  function handleGetAssignmentSuccess(response){
    console.log('Success! Got assignments:', response);
    vm.assignments = response.data;
  }

  function handlePostAssignmentSuccess(response){
    console.log('Success! Posted assignment:', response);
    //  Resets form
    vm.assignmentNumber = undefined;
    vm.studentName = undefined;
    vm.score = undefined;
    vm.dateCompleted = undefined;
    vm.getAssignment();
  }

  function handleDeleteAssignmentSuccess(response){
    console.log('Success! Deleted assignment:', response);
    vm.getAssignment();
  }

  function handleFailure(response){
    console.log('Request failed:', response);
  }

  vm.getAssignment();

}]);
