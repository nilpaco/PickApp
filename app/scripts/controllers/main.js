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
    $scope.showFirst = true;
    $scope.showSecond = false;
    $scope.showThird = false;

    $scope.changeView = function(val){
      if(val == 'first'){
        $scope.showFirst = true;
        $scope.showSecond = false;
        $scope.showThird = false;
      } else if (val == 'second') {
        $scope.showFirst = false;
        $scope.showSecond = true;
        $scope.showThird = false;
      } else if (val == 'third') {
        $scope.showFirst = false;
        $scope.showSecond = false;
        $scope.showThird = true;
      }

    }

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
