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

  function handleAdjectiveSuccess(response) {
    adjectivesList.push(response.data);
    adjectivesList[0] = shuffle(adjectivesList[0]);
    console.log('Success:', response);
    console.log('Adjectives list:', adjectivesList);
    $http(configNouns).then(handleNounSuccess, handleFailure);
  }

  function handleNounSuccess(response) {
    nounsList.push(response.data);
    nounsList[0] = shuffle(nounsList[0]);
    console.log('Success:', response);
    console.log('Nouns list:', nounsList);
    for (var i = 0; i < adjectivesList[0].length; i++) {
      handlesList.push(adjectivesList[0][i].name + nounsList[0][i].name);
    }
  }

  function handleFailure(response) {
    console.log('Failure:', response);
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  var handlesList = [];

  vm.getHandles = function() {
    console.log('Click');
    $http(configAdjectives).then(handleAdjectiveSuccess, handleFailure);
    // $http(configNouns).then(handleNounSuccess, handleFailure);
    // for (var i = 0; i < adjectivesList.length; i++) {
    //   handlesList.push(adjectivesList[i].name + nounsList[i].name);
    // }
    vm.handles = handlesList;
  }
});
