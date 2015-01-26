(function(){
  'use strict';

  angular.module('testAngularCmelion.components.levelOne.levelTwo')
      .controller('levelThreeComponentCtrl', controllerFunction)
      .component('levelThree', componentFunction);

  function controllerFunction ($scope, $element) {
    var vm = this;
    vm.text = 'this is the levelThree component';
  }

  function componentFunction () {
    return {
      //overrides
      templateUrl: 'components/level-one/level-two/level-three/level-three.html',
      controller: 'levelThreeComponentCtrl',
      controllerAs: 'vm'
    };
  }

}());

