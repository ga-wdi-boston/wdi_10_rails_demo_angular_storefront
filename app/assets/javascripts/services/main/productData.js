angular.module('StoreFront').factory('productData',['$http', function($http){
	var productData = {products: [
		{	name: 'Loading Products', description: "", price: ''} 
		]};

    // Load all products from Rails
    productData.loadProducts = function(){
      $http.get('./products.json').success(function(data){
        productData.products = data;
        console.log('Successfully loaded products.');

      }).error(function(){
        console.log('Failed to load products');
      });
    }; // loadProducts function

    // Load a single product from Rails
    productData.loadProduct = function(productId){
      $http.get('./products/'+ productId + '.json').success(function(data){
        productData.product = data;
        console.log('Successfully loaded product.');

      }).error(function(){
        console.log('Failed to load product');
      });
  }; // loadProduct function

  return productData
}]);
