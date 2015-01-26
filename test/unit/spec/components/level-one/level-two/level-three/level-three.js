'use strict';

describe('Component: levelThreeComponent', function () {

    describe('Directive: levelThreeComponent', function () {
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
            element = angular.element('<level-three-component></level-three-component>');
            element = $compile(element)(scope);
            scope.$digest();
            expect(element).toHaveClass('level-three-component');
        });

        it('should render text', function() {
            element = angular.element('<level-three-component></level-three-component>');
            element = $compile(element)(scope);
            scope.$digest();
            expect(element.text()).toContain('levelThree');
        });

    });

    describe('Controller: levelThreeComponentCtrl', function () {

        var Ctrl, scope, element;

        beforeEach(function () {

            module('testAngularCmelion');

            inject(function ($controller, $rootScope) {
                scope = $rootScope.$new();
                element = angular.element('<level-three-component></level-three-component>');
                Ctrl = $controller('levelThreeComponentCtrl', {
                    $scope: scope,
                    $element: element
                });
            });
        });

        it('should render a message', function () {
            expect(Ctrl.text).toEqual('this is the levelThree component');
        });
    });

});
