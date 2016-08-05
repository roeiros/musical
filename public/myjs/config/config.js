var app = angular.module("Music", ['ngAnimate','ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/products.html",
        controller  : "productCtrl"
    })
    .when("/admin", {
        templateUrl : "templates/admin.html",
        controller  : "adminCtrl"
    })
    .when("/customerView", {
        templateUrl : "templates/customerView.html",
//        controller  : "productCtrl"
    });    
});


