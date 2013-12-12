'use strict';

angular.module('powerApp')
  .directive('numberInputBox', function() {
    return {
      template: '<input type="number"/>',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
        element.keypress(function(event) {
          if (event.keyCode <= 40 && event.keyCode >= 37 || event.keyCode >= 48 && event.keyCode <= 57) {

          } else {
            event.preventDefault();
          }
        });

        element.keydown(function(event) {
          if (event.keyCode === 40 && parseInt(element.val()) <= 0) {
            event.preventDefault();
          }
        });
      }
    };
  });