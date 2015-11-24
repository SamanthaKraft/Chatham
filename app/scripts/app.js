'use strict';

/**
 * @ngdoc overview
 * @name startApp
 * @description
 * # startApp
 *
 * Main module of the application.
 */
angular
  .module('rocketleague', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'resources/playerfeature/playerview.html',
        controller: 'playerviewCtrl',
      })
      .when('/map', {
        templateUrl: 'resources/mapfeature/mapview.html',
        controller: 'mapviewCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
