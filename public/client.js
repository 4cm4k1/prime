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
    url:"/people",
    data:null
  };
  var configPostPatronus = {
    method:"POST",
    url:"/patronuses",
    data:$scope.patronusText
  };

  function displayPeople(response){
    $http(configPeople).then(handleDisplayPeopleSuccess, handleFailure);
  };
  function displayPatronuses(response){
    $http(configPatronus).then(handleDisplayPatronusSuccess, handleFailure);
  };

  function handleDisplayPeopleSuccess(response){
    console.log('This is the list of people: ', response);
    for(var i = 0; i < response.data.length; i++){
    var personFullName = response.data[i].first_name + " " + response.data[i].last_name;
    console.log(personFullName);
    peopleList.push(personFullName);
  }
    console.log(peopleList);
    $scope.peopleList = peopleList;
  };
  function handleDisplayPatronusSuccess(response){
    console.log('This is the list of patronuses: ', response);
    for(var i = 0; i < response.data.length; i++){
    var patronusName = response.data[i].patronus_name;
    console.log(patronusName);
    patronusList.push(patronusName);
  }
    console.log(patronusList);
    $scope.patronusList = patronusList;
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
    console.log($scope.personText);
    configPostPeople.data = {person: $scope.personText};
  $http(configPostPeople).then(handlePostPeopleSuccess, handleFailure);
};
$scope.patronusSubmit = function(){
  console.log($scope.patronusText);
  $http(configPostPatronus).then(handlePostPatronusSuccess, handleFailure);
};
displayPeople();
displayPatronuses();

});
