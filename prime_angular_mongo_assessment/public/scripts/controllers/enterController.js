myApp.controller('enterController', ['$scope', '$http', function($scope, $http) {
  $scope.enterHero = function() {
    $scope.heroObject = {
      alias: $scope.alias,
      first_name: $scope.firstName,
      last_name: $scope.lastName,
      city: $scope.city,
      power_name: $scope.powerName
    };
    
    var promise = $http.post('/enter', $scope.heroObject).then(function(response) {
      console.log('POST response from server: ', response);
    });

    $scope.alias = '';
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.city = '';
    $scope.powerName = '';

    return promise;
  };

  $scope.getSuperPowers = function() {
    var promise = $http.get('/enter').then(function(response) {
      $scope.superPowers = response.data;
      console.log('getSuperPowers data response: ', response);
    });
    return promise;
  };

  $scope.superPowers = $scope.getSuperPowers();

  if ($scope.getSuperPowers() === undefined) {
    $scope.getSuperPowers().then(function() {
      $scope.superPowers = $scope.getSuperPowers();
    });
  } else {
    $scope.superPowers = $scope.getSuperPowers();
  }

}]);
