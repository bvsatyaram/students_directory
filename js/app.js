var myApp = angular.module('myApp', []);

myApp.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/tasks.json').success(function(data) {
    $scope.tasks = data;
  });
}]);