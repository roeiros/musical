app.controller("productCtrl",function($scope,cartService, adminService,$http){ 
    
   $http({
    method: 'GET',
    url: '/products'
   }).then(function successCallback(res) {
      $scope.products = res.data;
   }, function errorCallback(res) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
   });
    

    adminService.setProducts($scope.products);

 
     $scope.addToCart = function(item){
         cartService.addToCart(item);
         cartService.broadcast('updateCart');
     };

     var getCtgs = function(filteredItems){
        var ctgs = [];
        filteredItems.forEach(function(it){                 
            it.categories.forEach(function(ctg){
                if ( ctgs.indexOf(ctg) === -1 ) ctgs.push(ctg);                 
            }) ;            
        });          
        $scope.ctgs = ctgs;
    };

    $scope.$on('setDisabled',function(b,data){
        var product = $scope.products.filter(function( obj ) {
             return obj.id === data.id;
        });
        product[0].disabled = data.disabled;
    });

     $scope.$watch('filtered', function(newVal) {
        if (newVal) getCtgs(newVal);                                       
     });
});




