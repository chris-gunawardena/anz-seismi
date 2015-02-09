'use strict';

/**
 * @ngdoc overview
 * @name anzApp
 * @description
 * # anzApp
 *
 * Main module of the application.
 */
angular
  .module('anzApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngRangeSlider'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
