'use strict';

angular.module('famousAngularStarter')
  .controller('MainCtrl', function($scope, $famous) {
    var Transitionable = $famous['famous/transitions/Transitionable'];
    var Timer = $famous['famous/utilities/Timer'];


    $scope.spinner = {
      speed: 55
    };
    $scope.slope = {
      angle: 0
    };

    $scope.slopeRad = {
      rad: 0
    };

    $scope.degToRad = function() {
      $scope.slopeRad.rad = $scope.slope.angle * 3.14159265359 / 180;

    };
    $scope.rotateY = new Transitionable(0);

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
