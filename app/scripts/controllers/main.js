'use strict';

/**
 * @ngdoc function
 * @name anzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anzApp
 */
angular.module('anzApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
