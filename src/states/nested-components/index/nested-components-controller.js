(function(){
  'use strict';

  angular.module('testAngularCmelion')
      .config(configFunction)
      .controller('NestedComponentsCtrl', controllerFunction);

    function configFunction ($stateProvider, stateFactory) {
      $stateProvider.state('nestedComponents', stateFactory('NestedComponents', {
        url: '/nested-components',
        templateUrl: 'states/nested-components/index/main-view.html'
      }));
    }

      
    function controllerFunction ($scope) {
      var vm = this;
      vm.foo = 'bar';
    }

}());

