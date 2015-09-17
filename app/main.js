(function () {
  var bowerUrl = 'bower_components/';
  require.config({
    baseUrl: '../',
    paths: {
      angular: bowerUrl + 'angular/angular',
      ngRoute: bowerUrl + 'angular-route/angular-route',
      ui_bootstrap: bowerUrl + 'angular-bootstrap/ui-bootstrap',
      app: 'app/app',
      controllers: 'app/controllers'
    },
    waitSeconds: 15,
    shim: {
      angular: {
        exports: 'angular'
      },
      ngRoute: {
        deps: ['angular'],
        exports: 'ngRoute',
      },
      ui_bootstrap: {
        deps: [

        ],
        exports: 'ui_bootstrap'
      },
      app: {
        deps: [
          'angular'
        ],
        exports: 'app',
      },
      controllers: {
        exports: 'controllers'
      }
    }
  });
})();

require(['app'], function (app) {
  app.init();
});
