'use strict';

describe('Controller(/nested-components): NestedComponentsCtrl', function () {

    var NestedComponents, scope;

    beforeEach(function () {

        module('testAngularCmelion');

        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            NestedComponents = $controller('NestedComponentsCtrl', {
                $scope: scope
            });
        });
    });

    it('should attach init data to scope', function () {
        expect(NestedComponents.foo).toEqual('bar');
    });
});

