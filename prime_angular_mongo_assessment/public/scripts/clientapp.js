var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/enter', {
      templateUrl: '/views/templates/enter.html',
      controller: 'enterController'
    })
    .when('/remove', {
      templateUrl: '/views/templates/remove.html',
      controller: 'removeController'
    })
    .otherwise({
      redirectTo: 'enter'
    });
}]);
