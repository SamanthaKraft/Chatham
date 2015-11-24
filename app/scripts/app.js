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
    'ngTouch',
    'rocketleague.controller',
    'rocketleague.service'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'resources/playerfeature/playerview.html',
        controller: 'playerviewCtrl',
        controllerAs: 'main'
      })
      .when('/map', {
        templateUrl: 'resources/mapfeature/mapview.html',
        controller: 'mapviewCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
