app.service('cartService',function($rootScope){
    
    this.broadcast = function(evName,obj) {
        $rootScope.$broadcast(evName,obj);
    };
 
    this.listen    = function(evName,callback) {
        $rootScope.$on(evName,callback);
    };

    var cart           = [];
    var getTotalItems  = 0;
    var getTotalPrice  = 0;
  
    function getTotal(){
        var total = 0;
        cart.forEach(function(it){
            total += ( it.quantity * it.price);
        });
        return total;
    }
    
    function getTotalItemsInCart(){
        var totalItems = 0;
        cart.forEach(function(it){
            totalItems +=  it.quantity;
        });  
        return totalItems;
    }
    
    function getTotals(){
        getTotalItems = getTotalItemsInCart();
        getTotalPrice = getTotal();   
    }
     
    this.addToCart = function(item){
        if (item.disabled) return;
        var indexOfItem = cart.indexOf(item);
        if (indexOfItem > -1){              
             cart[indexOfItem].quantity++;
             if ( item.stock === item.quantity ) item.disabled = true;                
        } else {
            item.quantity = 1;   
            cart.push(item);
        } 
        getTotals();
    };
    
    this.setDisabled = function(item){
        item.disabled = true;
    };
    
    this.getCart = function(){
        return cart;
    };
    
    this.setCart = function(newCart)
    {
        cart = newCart;
        getTotals(); 
    };
    
    this.getTotal = function(){
        return getTotalPrice;  //get the sum of items price
    };
    
    this.getTotalItems = function(){
        return getTotalItems; //get total items count in cart
    };
    
    this.clearCart = function()
    {
        cart.forEach(function(it){
             it.disabled = false;
        });
        cart = [];
        getTotalPrice = 0;
        getTotalItems = 0;
    };
});

