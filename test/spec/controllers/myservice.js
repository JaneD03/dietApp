'use strict';

describe('Controller: MyserviceCtrl', function () {

  // load the controller's module
  beforeEach(module('ufmClientApp'));

  var MyserviceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyserviceCtrl = $controller('MyserviceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
