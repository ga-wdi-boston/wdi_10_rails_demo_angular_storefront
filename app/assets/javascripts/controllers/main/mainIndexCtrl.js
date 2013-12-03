var IndexCtrl = function($scope, $location){                                              

 $scope.data = {products: [
  {name: 'Product 0', description: "Product 1 description", price: 40.23},
  {name: 'Product 1', description: "Product 2 description", price: 4.35},
  {name: 'Product 2', description: "Product 3 description", price: 20.45}
  ]};

  $scope.viewPost = function(productId){
    $location.url('/product/' + productId);
  }
};          