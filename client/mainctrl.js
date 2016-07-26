(function() {
    'use strict';
    angular.module('groceryListApp')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$http'];

    function MainCtrl($http) {
        var vm = this;
        vm.test = 'Hello World';
    }
})();
