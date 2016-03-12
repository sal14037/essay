'use strict';

/**
 * @ngdoc function
 * @name essayApp.controller:EssayCtrl
 * @description
 * # EssayCtrl
 * Controller of the essayApp
 */
angular.module('essayApp')
    .controller('EssayCtrl', function ($scope) {
        this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.text = "TEST ME!"
    });