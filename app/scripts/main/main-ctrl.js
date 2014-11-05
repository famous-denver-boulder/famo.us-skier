'use strict';

angular.module('famousAngularStarter')
  .controller('MainCtrl', function($scope, $famous, $timeline) {
    var Transitionable = $famous['famous/transitions/Transitionable'];
    var Timer = $famous['famous/utilities/Timer'];
    var Easing = $famous['famous/transitions/Easing'];


    $scope.align = new Transitionable([0.5, 0.5, 0]);

    $scope.spinner = {
      speed: 55
    };
    $scope.slope = {
      angle: 0
    };

    $scope.slopeRad = {
      rad: 0
    };


    //famous does rotation in radians this converts angle # to radians
    $scope.degToRad = function() {
      $scope.slopeRad.rad = $scope.slope.angle * 3.14159265359 / 180;

    };
    $scope.rotateY = new Transitionable(0);

    $scope.slide = function() {
      $scope.align.set([2, 0.5, 1], {
        duration: 5000,
        curve: 'easeInOut'
      });
    };
    //run function on every tick of the Famo.us engine
    Timer.every(function() {
      var adjustedSpeed = parseFloat($scope.spinner.speed) / 1200;
      $scope.rotateY.set($scope.rotateY.get() + adjustedSpeed);
    }, 1);

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });
