var app = angular.module("Music", ['ngAnimate','ngRoute','ngFileUpload']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/products.html",
        controller  : "productCtrl"
    })
    .when("/admin", {
        templateUrl : "templates/admin.html"
    })
    .when("/admin/manageOrders", {
        templateUrl : "templates/manageOrders.html",

    })
    .when("/admin/promotions", {
        templateUrl : "templates/promotions.html",

    })
    .when("/admin/statistics", {
        templateUrl : "templates/statistics.html",

    })
    .when("/admin/customerView", {
        templateUrl : "templates/customerView.html",
    });    
});


