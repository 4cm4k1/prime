var myApp = angular.module('myApp', []);

myApp.controller('IndexController', ['$scope', '$http', function($scope, $http) {
    $scope.people;
    $scope.name = '';
    $scope.location = '';

    function getData() {
        $http.get('/person').then(function(response) {
            $scope.people = response.data;

        });
    }

    $scope.addPerson = function() {
        var person = {
            name: $scope.name,
            location: $scope.location
        };

        $http.post('/person', person).then(function(response) {
            $scope.people = response.data;
        });
    };

    $scope.delete = function(id) {
        console.log(id);
        $http.delete('/person/' + id).then(function(response) {
            getData();
            console.log(response.data);
        });
    }

    $scope.update = function(id) {
        console.log(id);
        var data = {name: 'Scott'};
        $http.put('/person/' + id, data).then(function(response) {
            getData();
        });
    }


    getData();

}]);