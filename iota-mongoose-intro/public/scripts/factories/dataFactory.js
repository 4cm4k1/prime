myApp.factory('DataFactory', ['$http', function($http) {
    // PRIVATE
    var favorites = undefined;

    var getFavoriteData = function() {
        console.log('getting data from server');
        var promise = $http.get('/favorite').then(function(response) {
            favorites = response.data;
            console.log('Async data response:', favorites);
        });

        return promise;
    };

    var saveFavorite = function(favorite) {
        console.log('saving new favorite');
        var promise = $http.post('/favorite', favorite).then(function(response) {
            console.log('favorite saved');
            return getFavoriteData();
        });

        return promise;
    };


    //PUBLIC
    var publicApi = {
        factoryFavoriteData: function() {
            return favorites;
        },
        factoryRetrieveData: function() {
            return getFavoriteData();
        },
        factorySaveFavorite: function(favorite) {
            return saveFavorite(favorite);
        }
    };

    return publicApi;

}]);