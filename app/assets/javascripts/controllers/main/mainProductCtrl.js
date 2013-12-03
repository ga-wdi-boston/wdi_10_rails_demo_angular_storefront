var ProductCtrl = function($scope, $routeParams){                                              

	$scope.data = {product:
		{name: 'Product 1', description: "Product 1 description", price: 40.23}
	};

	$scope.data.productId = $routeParams.productId;
}; 