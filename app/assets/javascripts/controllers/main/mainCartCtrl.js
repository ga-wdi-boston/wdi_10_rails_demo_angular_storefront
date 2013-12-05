// javascript constructor function
// that acts as an Angular controller.
var CartCtrl = function($scope){

   $scope.addProductToCart = function(productId){
    console.log("Adding a product "+ productId + " to the cart");
  }


}