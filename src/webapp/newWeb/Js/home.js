var a = angular.module("myapp",['ngRoute']);
a.controller("myctrl",function($scope){
})
a.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '../html/home.html',
        controller: 'myctrl'
    })
    .otherwise({
        templateUrl: '../html/home.html',
        controller: 'myctrl'
    });
});
