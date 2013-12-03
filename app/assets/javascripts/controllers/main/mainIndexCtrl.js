var IndexCtrl = function($scope, $location, $http){                                              

 $scope.data = {products: [
  {name: 'Loading Products', description: "", price: ''} 
  ]};

  loadProducts = function(){
    $http.get('./products.json').success(function(data){
      $scope.data.products = data;
      console.log('Successfully loaded posts.');

    }).error(function(){
      console.log('Failed to load posts');
    });
  }; // loadProducts function

  loadProducts();

  $scope.viewPost = function(productId){
    $location.url('/product/' + productId);
  }

};          