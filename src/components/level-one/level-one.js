(function(){
  'use strict';


  angular.module('testAngularCmelion.components')
      .controller('levelOneComponentCtrl', controllerFunction)
      .component('levelOne', componentFunction);

  function controllerFunction ($scope, $element) {
    var vm = this;
    vm.text = 'this is the levelOne component';
  }

  function componentFunction () {
    return {
      //overrides
    };
  }

}());

