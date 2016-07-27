angular.module('primeAssessment2', []);

angular.module('primeAssessment2').controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
    //  Where students' names will be stored when the $http request returns
    //  Format: { name: 'String of Student Name' }
    $scope.students = [];

    //  Function for ng-click that conducts the $http request
    $scope.getStudents = function() {
        $http({
            method: 'GET',
            url: '/students'

        }).then(function successCallback(response) {

            //  Loops through the response and pushes each index of the array (string)
            //  to our $scope.students as an object w/ format specified above
            for (var i = 0; i < response.data.length; i++) {
                $scope.students.push({
                    name: response.data[i]
                });
            }
            //  Also logs the response data to console
            console.log('Success: Server responded...', response);

        }, function errorCallback(response) {
            //  If it fails
            console.log('ERROR: Server responded...', response);

        });
    };
}]);
