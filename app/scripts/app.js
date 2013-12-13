'use strict';

angular.module('powerApp', [
  'ngRoute',
  'ngAnimate'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/lets/get/fucked/up', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/lets/get/fucked/up'
      });
  });
