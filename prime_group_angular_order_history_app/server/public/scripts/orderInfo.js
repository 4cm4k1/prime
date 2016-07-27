myApp.directive('orderInfo',
  function() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'views/orderInfo.html',
      controller: 'CustomerController'
    };
  });
