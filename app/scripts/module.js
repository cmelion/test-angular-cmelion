'use strict';

var components = angular.module('testYeoman.components', []);
angular.componentFactory.moduleDecorator(components);

var app = angular.module('testYeoman', [
  'kennethlynne.componentFactory',
  'ngSymbiosis.utils',
  'ngSymbiosis.routeProvider',
  'ngSymbiosis.repository',
  'ngSymbiosis.model',
  'testYeoman.components',
  'ngAnimate',
  'ajoslin.promise-tracker',
  'cgBusy',
  'chieffancypants.loadingBar',
  'ui.router',
  'ui.bootstrap'
]);
angular.componentFactory.moduleDecorator(app);