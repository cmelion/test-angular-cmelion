(function(){
  'use strict';

  angular.module('testAngularCmelion')
      .config(configFunction);

    function configFunction ($urlRouterProvider) {
      $urlRouterProvider.when('', '/index');
      $urlRouterProvider.otherwise("/error?code=404");
    }

}());
