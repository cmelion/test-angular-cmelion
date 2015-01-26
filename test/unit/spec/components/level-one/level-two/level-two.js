'use strict';

describe('Component: levelTwoComponent', function () {

    describe('Directive: levelTwoComponent', function () {
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
            element = angular.element('<level-two-component></level-two-component>');
            element = $compile(element)(scope);
            scope.$digest();
            expect(element).toHaveClass('level-two-component');
        });

        it('should render text', function() {
            element = angular.element('<level-two-component></level-two-component>');
            element = $compile(element)(scope);
            scope.$digest();
            expect(element.text()).toContain('levelTwo');
        });

    });

    describe('Controller: levelTwoComponentCtrl', function () {

        var Ctrl, scope, element;

        beforeEach(function () {

            module('testAngularCmelion');

            inject(function ($controller, $rootScope) {
                scope = $rootScope.$new();
                element = angular.element('<level-two-component></level-two-component>');
                Ctrl = $controller('levelTwoComponentCtrl', {
                    $scope: scope,
                    $element: element
                });
            });
        });

        it('should render a message', function () {
            expect(Ctrl.text).toEqual('this is the levelTwo component');
        });
    });

});
