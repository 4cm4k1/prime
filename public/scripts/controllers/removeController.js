myApp.controller('removeController', ['$scope', '$http', function($scope, $http) {
  $scope.getSuperHeroes = function() {
    var promise = $http.get('/remove').then(function(response) {
      $scope.superHeroes = response.data;
      console.log('getSuperHeroes data response: ', response);
    });
    return promise;
  };

  /* Couldn't remember/find how to get the specific object I want to remove */
  $scope.removeHero = function(){
    var promise = $http.delete('/remove').then(function(response) {
      console.log('getSuperHeroes data response: ', response);
    });
    $scope.superHeroes = $scope.getSuperHeroes();
    return promise;
  };

  $scope.superHeroes = $scope.getSuperHeroes();

  if ($scope.getSuperHeroes() === undefined) {
    $scope.getSuperHeroes().then(function() {
      $scope.superHeroes = $scope.getSuperHeroes();
    });
  } else {
    $scope.superHeroes = $scope.getSuperHeroes();
  }
}]);
