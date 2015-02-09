'use strict';

/**
 * @ngdoc function
 * @name anzApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the anzApp
 */
angular.module('anzApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
