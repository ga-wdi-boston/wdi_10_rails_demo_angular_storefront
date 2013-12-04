var ProductCtrl = function($scope, $routeParams, $http){                                              

	$scope.data = {product:
		{name: 'Loading a Product', description: "", price: ""}
	};

  loadProduct = function(){
    $http.get('./products/'+ $routeParams.productId + '.json').success(function(data){
      $scope.data.product = data;
      console.log('Successfully loaded product.');

    }).error(function(){
      console.log('Failed to load product');
    });
  }; // loadProduct function

 loadProduct();
	//$scope.data.productId = $routeParams.productId;
}; 