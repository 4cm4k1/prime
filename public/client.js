angular.module('patronusapp', []);

angular.module('patronusapp').controller('patronuscontroller', function($scope, $http) {
    var vm = this;



    var configPeople = {
        method: "GET",
        url: "/people"
    };
    var configPatronus = {
        method: "GET",
        url: "/patronuses"
    };

    var configPostPeople = {
        method: "POST",
        url: "/people",
        data: null
    };
    var configPostPatronus = {
        method: "POST",
        url: "/patronuses",
        data: null
    };

    $scope.peopleList;
    $scope.patronusList;

    displayPeople();
    displayPatronuses();

    function displayPeople() {
        $http(configPeople).then(handleDisplayPeopleSuccess, handleFailure);
    };

    function displayPatronuses() {
        $http(configPatronus).then(handleDisplayPatronusSuccess, handleFailure);
    };

    function handleDisplayPeopleSuccess(response) {
        //   console.log('This is the list of people: ', response);
        //   for(var i = 0; i < response.data.length; i++){
        //   var personFullName = response.data[i].first_name + " " + response.data[i].last_name;
        //   console.log(personFullName);
        //   peopleList.push(personFullName);
        // }
        //   console.log(peopleList);
        //   $scope.peopleList = peopleList;
        $scope.peopleList = response.data;
    };

    function handleDisplayPatronusSuccess(response) {
        //   console.log('This is the list of patronuses: ', response);
        //   for(var i = 0; i < response.data.length; i++){
        //   var patronusName = response.data[i].patronus_name;
        //   console.log(patronusName);
        //   patronusList.push(patronusName);
        // }
        //   console.log(patronusList);
        $scope.patronusList = response.data;
    };

    function handlePostPeopleSuccess(response) {
        console.log('This is what was posted to peoplelist: ', response);
        $scope.peopleList.push(response.data[0]);
    };

    function handlePostPatronusSuccess(response) {
        console.log('This is what was posted to patronusList: ', response);
        $scope.patronusList.push(response.data[0]);
    };

    function handleFailure(response) {
        console.log('There was an error! ', response);
    };
    $scope.personSubmit = function() {
        console.log($scope.personText);
        configPostPeople.data = {
            person: $scope.personText
        };
        $http(configPostPeople).then(handlePostPeopleSuccess, handleFailure);
        // displayPeople();
    };
    $scope.patronusSubmit = function() {
        console.log($scope.patronusText);
        configPostPatronus.data = {
            patronus: $scope.patronusText
        };
        $http(configPostPatronus).then(handlePostPatronusSuccess, handleFailure);
        // displayPatronuses();
    };
    // displayPeople();
    // displayPatronuses();

});
