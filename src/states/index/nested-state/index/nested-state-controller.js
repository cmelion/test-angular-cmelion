(function(){
  'use strict';

  angular.module('testAngularCmelion')
      .config(configFunction)
      .controller('NestedStateCtrl', controllerFunction);

    function configFunction ($stateProvider, stateFactory) {
      $stateProvider.state('index.nestedState', stateFactory('NestedState', {
        url: '/nested-state',
        templateUrl: 'states/index/nested-state/index/main-view.html'
      }));
    }


    function controllerFunction ($scope) {
      var vm = this;
      vm.foo = 'bar';
    }

}());

