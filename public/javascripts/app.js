var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: 'partials/index.html',
        controller: 'mainController'
    }).otherwise({redirectTo: '/'});
});

app.controller('mainController',['$scope','$http',function($scope,$http){
    $scope.formData = {
        firstname: "",
        lastname: "",
        email: ""
    };

    var init  = function(){
        $http.get('/rest').then(function(response){
            $scope.data = response.data;
            $scope.formData.firstname = "";
            $scope.formData.lastname = "";
            $scope.formData.email = "";
        });
    };

    init();

    $scope.post = function(){
        $http.post('/rest',$scope.formData).then(function(response){
            init();
        })
    };

    $scope.put = function(id){
        $http.put('/rest/update/' + id,$scope.formData).then(function(response){
            init();
        });
    };

    $scope.delete = function(id){
        $http.delete('/rest/delete/' + id).then(function(response){
            init();
        });
    };


}]);
