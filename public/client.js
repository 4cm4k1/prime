angular.module('angularOlympics', ['ngRoute']);

angular.module('angularOlympics').config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/archery', {
            templateUrl: 'views/archery.html',
            controller: 'ArcheryController'
        })
        .when('/canoe-kayak', {
            templateUrl: 'views/canoe-kayak.html',
            controller: 'CanoeKayakController'
        })
        .when('/modern-pentathlon', {
            templateUrl: 'views/modern-pentathlon.html',
            controller: 'ModernPentathlonController'
        })
        .when('/soccer', {
            templateUrl: 'views/soccer.html',
            controller: 'SoccerController'
        })
        .when('/taekwondo', {
            templateUrl: 'views/taekwondo.html',
            controller: 'TaekwondoController'
        })
    $locationProvider.html5Mode(true);
});

angular.module('angularOlympics').controller('ArcheryController', ['$scope', '$http', function ($scope, $http) {
    $http.get('/olympics/archery').then(function handleSuccess(response) {
        $scope.athlete = response.data;
    }, function handleFailure(response) {
        console.log('Error:', response);
    });
}]);

angular.module('angularOlympics').controller('CanoeKayakController', ['$scope', '$http', function ($scope, $http) {
    $http.get('/olympics/canoe-kayak').then(function handleSuccess(response) {
        $scope.athlete = response.data;
    }, function handleFailure(response) {
        console.log('Error:', response);
    });
}]);

angular.module('angularOlympics').controller('ModernPentathlonController', ['$scope', '$http', function ($scope, $http) {
    $http.get('/olympics/modern-pentathlon').then(function handleSuccess(response) {
        $scope.athlete = response.data;
    }, function handleFailure(response) {
        console.log('Error:', response);
    });
}]);

angular.module('angularOlympics').controller('SoccerController', ['$scope', '$http', function ($scope, $http) {
    $http.get('/olympics/soccer').then(function handleSuccess(response) {
        $scope.athlete = response.data;
    }, function handleFailure(response) {
        console.log('Error:', response);
    });
}]);
angular.module('angularOlympics').controller('TaekwondoController', ['$scope', '$http', function ($scope, $http) {
    $http.get('/olympics/taekwondo').then(function handleSuccess(response) {
        $scope.athlete = response.data;
    }, function handleFailure(response) {
        console.log('Error:', response);
    });
}]);
