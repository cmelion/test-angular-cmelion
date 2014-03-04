'use strict';

angular.module('testYeoman')
    .config(function ($stateProvider, stateFactory) {
        $stateProvider.state('index', stateFactory('Index', {
            url:'/'
        }));
    })
    .controller('IndexCtrl', function ($scope) {
        $scope.message = 'Hello world!';
    });
