angular.module('angularOlympics', []);

angular.module('angularOlympics').controller('MainController', ['$scope', '$http', function($scope, $http) {
    //  array of strings to use for routes
    $scope.sports = ['archery', 'canoe-kayak', 'modern-pentathlon', 'soccer', 'taekwondo'];

    //  ng-click function
    $scope.generateAthletes = function() {
        makeGetRequests($scope.sports);
    };

    //  this function executes the $http requests and stores the responses
    //  to $scope.athleteList
    function makeGetRequests(sportsArray) {
        var athleteList = [];
        angular.forEach(sportsArray, function(item) {
            var request = $http({
                method: 'GET',
                url: '/olympics/' + item
            }).then(handleSuccess, handleFailure)

            function handleSuccess(response) {
                athleteList.push(response.data);
                console.log('Success:', response.data);
            }

            function handleFailure(response) {
                console.log('Error:', response.data);
            }
        });
        $scope.athleteList = athleteList;
    }
}]);
