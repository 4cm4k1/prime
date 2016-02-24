var myApp = angular.module('myApp', []);

myApp.controller('CustomerController', ['$scope', '$http', function($scope, $http) {
  $scope.customers;
  $scope.orders;
  console.log('hi');

  $http({
    method: 'GET',
    url: '/data'
  }).then(function(response) {
    $scope.customers = response.data;
  });

  $scope.getOrders = function(customerID) {
    $http({
      method: 'POST',
      url: '/data/' + customerID,
      data: {customerID: customerID}
    }).then(function(response) {
      $scope.orders = response.data;
      console.log($scope.orders);
    });
  };
}]);
