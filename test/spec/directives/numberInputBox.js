'use strict';

describe('Directive: numberInputBox', function () {

  // load the directive's module
  beforeEach(module('powerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<number-input-box></number-input-box>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the numberInputBox directive');
  }));
});
