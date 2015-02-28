var myApp = angular.module('myApp', []);

myApp.controller('ListController', ['$scope', function($scope) {
  $scope.tasks = [
    "Learn Angular",
    "Show Off",
    "Get Job",
    "Build an App",
    "Go to Goa",
    "Explore WWW",
    "Buy a car",
    "Get married",
    "Have kids",
    "Enjoy"
  ];
}]);