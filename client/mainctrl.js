(function() {
    'use strict';
    angular.module('groceryListApp')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$http'];

    function MainCtrl($http) {
        //  controller as...
        var vm = this;

        //  variables
        //  taken from input fields
        vm.newItem = {};
        //  filled after $http call with items in db
        vm.items = [];

        getItems();

        //  called when user clicks '+' button for a new item
        vm.submitNewItem = function(){

        };

        //  called when user clicks 'edit' on existing item
        vm.editItem = function(id){

        };

        //  called when user clicks 'delete' on existing item
        vm.deleteItem = function(id){

        };

        function getItems(){
          $http.get('/list').then(handleGetItemsSuccess, handleFailure);
        }

        function handleGetItemsSuccess(response){
          vm.items = response.data;
          return vm.items;
        }

        function handleFailure(response){
          console.log('Request failed, the server responded:', response);
        }
    }
})();
