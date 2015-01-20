(function(){
  'use strict';

  angular.module('testAngularCmelion.components')
      .controller('navbarComponentCtrl', controllerFunction)
      .component('navbar', componentFunction);

    function controllerFunction($scope, $element) {
      $scope.text = 'this is the navbar component';
    }

    function componentFunction() {
      return {
        controller: 'navbarComponentCtrl'
      };
    }

}());
