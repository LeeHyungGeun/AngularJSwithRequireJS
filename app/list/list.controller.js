(function () {
  define([
    'angular',
    'ngRoute'
  ], function (angular) {
      angular
      .module('Controllers')
      .controller('ListController', ['$scope', '$location', ListController]);

      ListController.$inject = ['$scope', '$location'];
      function ListController ($scope, $location) {
        $scope.name = 'List List List';
        $scope.naviEdit = function ($location) {
          $location.path('edit');
        }//naviEdit();
      }

      naviEdit.$inject = ['$location'];
      function naviEdit ($location) {
        console.log($location);
          $location.path('edit');
      }
  });
})();
