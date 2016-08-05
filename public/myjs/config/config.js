var app = angular.module("Music", ['ngAnimate','ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/products.html",
        controller  : "productCtrl"
    });    
});


