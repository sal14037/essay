'use strict';

/**
 * @ngdoc overview
 * @name essayApp
 * @description
 * # essayApp
 *
 * Main module of the application.
 */
angular
    .module('essayApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'picardy.fontawesome',
    'textAngular'
  ])
    .config(function ($routeProvider) {
        // $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/essay', {
                templateUrl: 'views/essay.html',
                controller: 'EssayCtrl',
                controllerAs: 'essay'
            })
            .otherwise({
                redirectTo: '/'
            });
    });