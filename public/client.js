var app = angular.module('twitterApp', []);

app.controller('TwitterController', function($http) {
  var vm = this;

  var adjectivesList = [];
  var nounsList = [];

  var configAdjectives = {
    method: 'GET',
    url: '/adjectives'
  };

  var configNouns = {
    method: 'GET',
    url: '/nouns'
  }

  function handleSuccess(response) {
    adjectivesList.push(response.data);
    nounsList.push(response.data);
    console.log('Success:', response);
  }

  function handleFailure(response) {
    console.log('Failure:', response);
  }

  var handlesList = [];

  vm.getHandles = function() {
    console.log('Click');
    $http(configAdjectives).then(handleAdjectiveSuccess, handleFailure);
    $http(configNouns).then(handleNounSuccess, handleFailure);
    for (var i = 0; i < adjectivesList.length; i++) {
      handlesList.push(adjectivesList[i].name + nounsList[i].name);
    }
    vm.handles = handlesList;
  }
});
