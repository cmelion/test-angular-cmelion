'use strict';

describe('Component: levelOneComponent', function () {

    describe('Directive: levelOneComponent', function () {
        var element, scope, $compile;

        beforeEach(function () {

            module('testAngularCmelion');

            inject(function ($rootScope, _$compile_) {
                scope = $rootScope.$new();
                $compile = _$compile_;
            });

        });
//id.substr(id.lastIndexOf('/') + 1)
        it('should have the component class', function() {
            element = angular.element('<level-one-component></level-one-component>');
            element = $compile(element)(scope);
            scope.$digest();
            expect(element).toHaveClass('level-one-component');
        });

        it('should render text', function() {
            element = angular.element('<level-one-component></level-one-component>');
            element = $compile(element)(scope);
            scope.$digest();
            expect(element.text()).toContain('levelOne');
        });

    });

    describe('Controller: levelOneComponentCtrl', function () {

        var Ctrl, scope, element;

        beforeEach(function () {

            module('testAngularCmelion');

            inject(function ($controller, $rootScope) {
                scope = $rootScope.$new();
                element = angular.element('<level-one-component></level-one-component>');
                Ctrl = $controller('levelOneComponentCtrl', {
                    $scope: scope,
                    $element: element
                });
            });
        });

        it('should render a message', function () {
            expect(Ctrl.text).toEqual('this is the levelOne component');
        });
    });

});
