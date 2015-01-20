(function(){
  'use strict';

  angular.module('testAngularCmelion')
      .config(configFunction);

    function configFunction ($urlRouterProvider) {
      $urlRouterProvider.when('', '/');
      $urlRouterProvider.otherwise("/error?code=404");
    }

}());
