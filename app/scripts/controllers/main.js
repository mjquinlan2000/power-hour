'use strict';

angular.module('powerApp')
  .controller('MainCtrl', function ($scope, $timeout) {

    $scope.backgroundColor = '';

    function _zeroPad(number){
      return ('0'+number).slice(-2);
    }

    $scope.calculateSeconds = function(){
      $scope.seconds = $scope.minutes * 60;
      $scope.displayTime();
    }

    $scope.displayTime = function(){
      var sec = parseInt($scope.seconds);

      $scope.currentTime = Math.floor(sec/60) + ':' + _zeroPad(sec % 60);
    };

    $scope.toggleRunning = function(){
      if($scope.isRunning){
        $scope.isRunning = false;
      }else{
        $scope.isRunning = true;
        $scope.run();
      }
    };

    $scope.getRandomColor = function(){
      return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    };

    $scope.crazyBackground = function(){
      if(parseInt($scope.seconds) % 60 < 4 && $scope.isRunning){
        $scope.backgroundColor = $scope.getRandomColor();
        $scope.numberColor = $scope.getRandomColor();
        $timeout($scope.crazyBackground, 100);
      }else{
        $scope.numberColor = '';
        $scope.backgroundColor = '';
      }
    };

    $scope.run = function(){
      if($scope.isRunning && $scope.seconds > 0){
        $scope.seconds--;
        if(parseInt($scope.seconds % 60) === 3){
          $scope.crazyBackground();
          $scope.currentTime = 'DRINK';
        }else{
          $scope.displayTime();
        }
        $scope.timeoutPromise = $timeout($scope.run, 1000);
      }else{
        $timeout.cancel($scope.timeoutPromise);
      }
    };
    $scope.seconds = 3600;
    $scope.minutes = 60;
    $scope.displayTime();
  });
