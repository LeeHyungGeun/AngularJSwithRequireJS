(function () {
  define([
    'angular',
    'ngRoute',
    'ui_bootstrap'
  ], function (angular, ngRoute, ui_bootstrap) {
    var init = function init() {

      angular.module('Controllers', []);//['ui.bootstrap']);
      require(['controllers'], function () {
        angular
        .module('app', ['ngRoute', 'Controllers'])//, 'ui.bootstrap'])
        .config(config);

        angular.element(document).ready(function () {
          angular.bootstrap(document, ['app']);
        });
      })

    };

    var baseTemplateUrl = 'app/';
    config.$inject = ['$routeProvider'];
    function config ($routeProvider) {
      $routeProvider
      .when('/list', {
        templateUrl: baseTemplateUrl + 'list/list.html',
        controller: 'ListController'
      })
      .when('/edit', {
        templateUrl: baseTemplateUrl + 'edit/edit.html',
        controller: 'EditController'
      })
      .otherwise({
        redirectTo: '/list'
      });
    }

    return {
      init: init
    }
  });
})();


// angular ui
// http://angular-ui.github.io/bootstrap/

// bootstrap
// http://getbootstrap.com/getting-started/#download
