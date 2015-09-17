(function () {
  define([
    'angular',
  ], function (angular) {
    angular
    .module('Controllers')
    .controller('EditController', ['$scope', EditController]);

    EditController.$inject = ['$scope'];
    function EditController ($scope) {
      $scope.click = function () {
        alert('제발');
      }
    }
  });
})();
