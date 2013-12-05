var ProductCtrl = function($scope, $routeParams, $http, $location, productData){                                              
 var lineItems = [
 { lineItemId: 0, name: 'Loading Products', description: "", price: ''} 
 ];

 var addProductToCart = function(productId){
  $http.post('/products/'+ productId + '/add_to_cart.json').
  success(function(data){
        // add product to cart here.
        lineItems.push(data);
        console.log("Successfully added product to cart");
      }).
  error(function(){
    console.error("Failed to add product to cart");
  });
  return true;
};

$scope.data = productData.products[0];

productData.loadProduct($routeParams.productId);
$scope.data.product = productData.products[$routeParams.productId - 1]

$scope.updateCart = function(productId){
    // Send request to update the cart
    addProductToCart(productId);

    // go to the cart page/view
    $location.url('/cart');
  };
}; 