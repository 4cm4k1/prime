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
          postItem();
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
          console.log('Successful get:', response);
          vm.items = response.data;
          return vm.items;
        }

        function postItem(){
          $http.post('/list', vm.newItem).then(handlePostItemSuccess, handleFailure);
        }

        function handlePostItemSuccess(response){
          console.log('Successful post:', response);
          getItems();
          vm.newItem = {};
        }

        function handleFailure(response){
          console.log('Request failed, the server responded:', response);
        }
    }
})();
