myApp.controller('FavoritesController', ['$scope', 'DataFactory', function($scope, DataFactory) {

    $scope.dataFactory = DataFactory;
    $scope.favorites = [];
    $scope.numFaves = 0;

    $scope.dataFactory.factoryRetrieveData().then(function() {
        $scope.favorites = $scope.dataFactory.factoryFavoriteData();
        $scope.numFaves = $scope.favorites.length;
    });
    //
    //if($scope.dataFactory.factoryFavoriteData() === undefined) {
    //    // initial load
    //
    //} else {
    //    $scope.favorites = $scope.dataFactory.factoryFavoriteData();
    //}

}]);