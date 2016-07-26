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
        vm.editItem = function(item){
          item.show = !item.show;
        };

        //  called when user clicks 'save' after editing item
        vm.saveItem = function(item){
          updateItem(item);
        }

        //  called when user clicks 'delete' on existing item
        vm.deleteItem = function(id){
          deleteItem(id);
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

        function updateItem(item){
          $http.put('/list/' + item._id, item).then(handleUpdateItemSuccess, handleFailure);
        }

        function handleUpdateItemSuccess(response){
          console.log('Successful put:', response);
          getItems();
        }

        function deleteItem(id){
          $http.delete('/list/' + id).then(handleDeleteItemSuccess, handleFailure);
        }

        function handleDeleteItemSuccess(response){
          console.log('Successful delete:', response);
          getItems();
        }

        function handleFailure(response){
          console.log('Request failed, the server responded:', response);
        }
    }
})();
