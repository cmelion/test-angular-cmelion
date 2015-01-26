'use strict';

describe('Controller(/index/nested-state): NestedStateCtrl', function () {

    var NestedState, scope;

    beforeEach(function () {

        module('testAngularCmelion');

        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            NestedState = $controller('NestedStateCtrl', {
                $scope: scope
            });
        });
    });

    it('should attach init data to scope', function () {
        expect(NestedState.foo).toEqual('bar');
    });
});

