'use strict';

angular.module('testYeoman')
    .config(function ($urlRouterProvider,$locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise("/error?code=404");
    });
