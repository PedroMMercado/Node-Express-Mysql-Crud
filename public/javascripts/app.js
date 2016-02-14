var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: 'partials/index.html',
        controller: 'mainController'
    });
});

app.controller('mainController',['$scope','$http',function($scope,$http){
    console.log('Inside main controller');
    $scope.name = 'Pedro';
}]);
