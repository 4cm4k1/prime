var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/petfinder.html',
            controller: 'PetController'
        })
        .when('/favorites', {
            templateUrl: '/views/templates/favorites.html',
            controller: 'FavoritesController'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);
