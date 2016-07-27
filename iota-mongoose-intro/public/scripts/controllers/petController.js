myApp.controller('PetController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
    $scope.animalType = '';
    $scope.pet = {};
    $scope.dataFactory = DataFactory;
    $scope.numFaves = 0;
    $scope.animalTypes = [
        {type: 'dog', label: 'Dog'},
        {type: 'cat', label: 'Cat'},
        {type: 'horse', label: 'Horse'},
        {type: 'reptile', label: 'Reptile'},
        {type: 'bird', label: 'Bird'},
        {type: 'barnyard', label: 'Barnyard Animal'},
        {type: 'pig', label: 'Piggy'},
        {type: 'smallfurry', label: 'Small & Furry'}
    ];

    if($scope.dataFactory.factoryFavoriteData() === undefined) {
        console.log('loading faves');
        $scope.dataFactory.factoryRetrieveData().then(function () {
            $scope.numFaves = $scope.dataFactory.factoryFavoriteData().length;
        });
    } else {
        $scope.numFaves = $scope.dataFactory.factoryFavoriteData().length;
    }

    $scope.findPet = function() {
        // API key
        var key = '';

        var baseURL = 'http://api.petfinder.com/';
        var query = 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=' + $scope.animalType.type;
        query += '&output=basic';
        query += '&format=json';

        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
        console.log(request);

        $http.jsonp(request).then(
            function(response) {
                $scope.pet = response.data.petfinder.pet;
                console.log($scope.pet);
            }
        );
    }

    $scope.addFavorite = function() {
        var favorite = {
            petfinderID: $scope.pet.id.$t,
            petName: $scope.pet.name.$t,
            petImageURL: '',
            description: $scope.pet.description.$t.substring(0, 99)
        };

        var image = $scope.pet.media.photos.photo[2].$t;
        if(image) {
            favorite.petImageURL = image;
        }

        console.log(favorite);

        $scope.dataFactory.factorySaveFavorite(favorite).then(function() {
            $scope.numFaves = $scope.dataFactory.factoryFavoriteData().length;
        });
    }

}]);