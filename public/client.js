angular.module('patronusapp', []);

angular.controller('patronuscontroller', function($scope, $http){
  var vm = this;

  var peopleList = [];
  var patronusList = [];

  var configPeople = {
    method:"GET",
    url:"/people"
  };
  var configPatronus = {
    method:"GET"
    url:"/patronus"
  };

  var configPostPeople = {
    method:"POST",
    url:"/people"
  };
  var configPostPatronus = {
    method:"POST",
    url:"/patronus"
  };

  function displayPeople(response){


  };
  function displayPatronuses(response){


  };
  function postPeople(configPostPeople){


  };
  function postPatronuses(configPostPatronus){


  };

});
