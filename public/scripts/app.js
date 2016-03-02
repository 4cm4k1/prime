var myApp = angular.module('myApp', []);

myApp.controller('IndexController', ['$scope', '$http', function($scope, $http) {

    $scope.people = [];
    $scope.name = '';
    $scope.location = '';

    $scope.addPerson = function() {
        var person = {
            name: $scope.name,
            location: $scope.location
        };

        $http.post('/data', person).then(function(response) {
            $scope.people = response.data;
        })
    };

    function getPeople() {
        $http.get('/data').then(function(response) {
            $scope.people = response.data;
            console.log(response.data);
        });

    }

    getPeople();

}]);