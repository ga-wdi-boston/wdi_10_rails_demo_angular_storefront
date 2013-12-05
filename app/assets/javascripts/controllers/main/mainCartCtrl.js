var CartCtrl = function($scope, $http, $location){                                             
  var lineItems = [];

  var updateCart = function(productId){
    $http.get('cart.json').
    success(function(data){
        // add product to cart here.
        lineItems = data;
        console.log("Successfully added product to cart");
      }).
    error(function(){
      console.error("Failed to add product to cart");
    });
    return true;
  };

  updateCart();
};
