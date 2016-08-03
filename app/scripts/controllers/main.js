'use strict';

/**
 * @ngdoc function
 * @name pickAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pickAppApp
 */
angular.module('pickAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope. cards=[];
    $scope.cards = [
            { title: "Cards 1",
              user: "username",
              location: "Vallcarca",
              img: "http://placehold.it/350x150"
            },
            {title: "Cards 1",
              user: "username",
              location: "Vallcarca",
              img: "http://placehold.it/350x150"}
        ];
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
