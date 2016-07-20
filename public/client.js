angular.module('patronusapp', []);

angular.module('patronusapp').controller('patronuscontroller', function($scope, $http){
  var vm = this;

  var peopleList = [];
  var patronusList = [];

  var configPeople = {
    method:"GET",
    url:"/people"
  };
  var configPatronus = {
    method:"GET",
    url:"/patronuses"
  };

  var configPostPeople = {
    method:"POST",
    url:"/people"
  };
  var configPostPatronus = {
    method:"POST",
    url:"/patronuses"
  };

  function displayPeople(response){
    $http(configPeople).then(handleDisplayPeopleSuccess, handleFailure);
  };
  function displayPatronuses(response){
    $http(configPatronus).then(handleDisplayPatronusSuccess, handleFailure);
  };

  function handleDisplayPeopleSuccess(response){
    console.log('This is the list of people: ', response);
    peopleList.push(response.data);
  };
  function handleDisplayPatronusSuccess(response){
    console.log('This is the list of patronuses: ', response);
    patronusList.push(response.data);
  };
  function handlePostPeopleSuccess(response){
    console.log('This is what was posted to peoplelist: ', response);
  };
  function handlePostPatronusSuccess(response){
    console.log('This is what was posted to patronusList: ', response);
  };
  function handleFailure(response){
    console.log('There was an error! ', response);
  };
  $scope.personSubmit = function(){
  var person = $scope.personText;
  $http.post(configPostPeople, person).then(handlePostPeopleSuccess, handleFailure);
};
$scope.patronusSubmit = function(){
  var patronus = $scope.patronusText;
  $http.post(configPostPatronus, patronus).then(handlePostPatronusSuccess, handleFailure);
};

});
