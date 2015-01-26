(function(){
  'use strict';

  var components = angular.module('testAngularCmelion.components', []);
  angular.componentFactory.moduleDecorator(components);

  components = angular.module('testAngularCmelion.components.levelOne', []);
  angular.componentFactory.moduleDecorator(components);

  components = angular.module('testAngularCmelion.components.levelOne.levelTwo', []);
  angular.componentFactory.moduleDecorator(components);

  var app = angular.module('testAngularCmelion', [
  'cmelion.routeProvider',
  'kennethlynne.componentFactory',
  'ngSymbiosis.utils',
  'ngSymbiosis.repository',
  'ngSymbiosis.model',
  'testAngularCmelion.components',
  'testAngularCmelion.components.levelOne',
  'testAngularCmelion.components.levelOne.levelTwo',
  'ngAnimate',
  'ajoslin.promise-tracker',
  'cgBusy',
  'chieffancypants.loadingBar',
  'ui.router',
  'ui.bootstrap'
]);
  angular.componentFactory.moduleDecorator(app);

}());
