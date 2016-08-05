app.controller("cartCtrl", function($scope,cartService) {
    
    $scope.$on('updateCart', function(e) {
       getDataFromService();
    });
    
    function getDataFromService(){
        $scope.cart = {
            cartInfo     :  cartService.getCart(),
            cartTotalSum :  cartService.getTotal(),
            cartItems    :  cartService.getTotalItems()
        };
    }
  
    $scope.clearCart = function()
    {
        cartService.clearCart();
        getDataFromService();
        $scope.showCart = false;
    };

//    $scope.setDisabled = function(index, bool){
//        if($scope.cart.cartInfo[index].quantity === $scope.cart.cartInfo[index].stock){
//        $scope.cart.cartInfo[index].isDisabled = bool;
//    }
//        cartService.setCart($scope.cart.cartInfo);
//        getDataFromService();
//    };
    function checkDisabled(index){
       return ( $scope.cart.cartInfo[index].quantity === $scope.cart.cartInfo[index].stock ) ? true : false;           
    } 

    $scope.manageItemQuantity = function(index,op) {  
        if (op === '-'){  
           if ( checkDisabled(index) ){
                if ( checkDisabled(index) ){
                    cartService.broadcast('setDisabled', {id : $scope.cart.cartInfo[index].id,disabled : false});
                } 
           }
           ($scope.cart.cartInfo[index].quantity > 1) ? 
           $scope.cart.cartInfo[index].quantity -= 1 : 
           $scope.cart.cartInfo.splice(index, 1);
        } else { 
           $scope.cart.cartInfo[index].quantity++;
           if ( checkDisabled(index) ){
               cartService.broadcast('setDisabled', {id : $scope.cart.cartInfo[index].id,disabled : true});
           }           
        }
        cartService.setCart($scope.cart.cartInfo);
        getDataFromService();
    };
 
    $scope.showCart = false;  
});


