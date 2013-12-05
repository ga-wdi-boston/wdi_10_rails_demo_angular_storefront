// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
//= require_self
//= require_tree ./services/main
//= require_tree ./filters/main
//= require_tree ./controllers/main
//= require_tree ./directives/main

var StoreFront = angular.module('StoreFront',[]);

StoreFront.config(["$httpProvider", function(provider){
  provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}]);

StoreFront.config(['$routeProvider', function($routeProvider){
  // Route for '/product/new'	
  $routeProvider.when('/product/new',{
    templateUrl: '../assets/mainCreatePost.html',
    controller: 'CreateProductCtrl'
  });  

  // Route for '/product'
  $routeProvider.when('/product/:productId', {
    templateUrl: '../assets/mainProduct.html',
    controller: 'ProductCtrl'
  });

  // Cart
  $routeProvider.when('/cart', {
    templateUrl: '../assets/mainCart.html',
    controller: 'CartCtrl'
  });
  // default route
  $routeProvider.otherwise({
    templateUrl: '../assets/mainIndex.html',
    controller: 'IndexCtrl'
  });
}]);
