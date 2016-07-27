myApp.directive('customerInfo',
  function() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'views/customerInfo.html',
      controller: 'CustomerController'
    };
  });
