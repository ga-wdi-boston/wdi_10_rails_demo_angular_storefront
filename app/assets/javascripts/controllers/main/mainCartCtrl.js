// javascript constructor function
// that acts as an Angular controller.
var CartCtrl = function($scope, $http){

  var getCartLineItems = function(){
      $http.get('').
        success(function(data){
          $scope.lineItems = data;
          console.log("Got Cart line items");
        });
   };

   $scope.addProductToCart = function(productId){
    $http.post("/products/"+ productId + "/add_to_cart", productId).
      success(function(data){
        console.log("Successfully add product to cart");
      });
    $location.url('/cart');
    console.log("Adding a product "+ productId + " to the cart");
  };

  // get all the 
  getCartLineItems();
}