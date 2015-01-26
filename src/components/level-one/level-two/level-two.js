(function(){
  'use strict';

  angular.module('testAngularCmelion.components.levelOne')
      .controller('levelTwoComponentCtrl', controllerFunction)
      .component('levelTwo', componentFunction);

  function controllerFunction ($scope, $element) {
    var vm = this;
    vm.text = 'this is the levelTwo component';
  }

  function componentFunction () {
    return {
      //overrides
      templateUrl: 'components/level-one/level-two/level-two.html',
      controller: 'levelTwoComponentCtrl',
      controllerAs: 'vm'
    };
  }

}());

