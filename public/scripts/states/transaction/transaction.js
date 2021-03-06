;(function(){
  'use strict';
  angular.module('coindropApp')
  .config(['$stateProvider', configuration]);

  function configuration($stateProvider, $stateParams) {
    $stateProvider
      .state('user.transaction', {
        url: '/transactions/:id',
        templateUrl: 'scripts/states/transaction/transaction.html',
        controller: 'TransactionController'
        // resolve:{
        //   resolvedData: function($stateParams){
        //     $http.get('/api/transactions/' + $stateParams.id)
        //       .then(function (data){
        //         return data;
        //       });
        //   }
        // }
      });
    }
}).call(this);
