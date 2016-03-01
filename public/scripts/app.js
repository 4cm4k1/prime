var myApp = angular.module('myApp', []);

myApp.controller('IndexController', ['$scope', '$http', function($scope, $http) {

    $scope.people = [];

    function getPeople() {
        $http.get('/data').then(function(response) {
            $scope.people = response.data;
            console.log(response.data);
        });

    }

    getPeople();

}]);