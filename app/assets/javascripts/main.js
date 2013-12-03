// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
//= require_self
//= require_tree ./services/main
//= require_tree ./filters/main
//= require_tree ./controllers/main
//= require_tree ./directives/main

var StoreFront = angular.module('StoreFront',[]);

StoreFront.config(['$routeProvider', function($routeProvider){
  // Route for '/post'
  // $routeProvider.when('/product/:productId', {
  //     templateUrl: '../assets/mainProdcut.html',
  //       controller: 'PostCtrl'
  //       });
  // default route
  $routeProvider.otherwise({
      templateUrl: '../assets/mainIndex.html',
      controller: 'IndexCtrl'
      });
}]);
