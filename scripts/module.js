(function(){
  'use strict';

  var components = angular.module('testAngularCmelion.components', []);
  angular.componentFactory.moduleDecorator(components);

  var app = angular.module('testAngularCmelion', [
  'cmelion.routeProvider',
  'kennethlynne.componentFactory',
  'ngSymbiosis.utils',
  'ngSymbiosis.repository',
  'ngSymbiosis.model',
  'testAngularCmelion.components',
  'ngAnimate',
  'ajoslin.promise-tracker',
  'cgBusy',
  'chieffancypants.loadingBar',
  'ui.router',
  'ui.bootstrap'
]);
  angular.componentFactory.moduleDecorator(app);

}());
