app.service('adminService',function($rootScope){
    
    this.broadcast = function(evName,obj) {
        $rootScope.$broadcast(evName,obj);
    };
 
    this.listen    = function(evName,callback) {
        $rootScope.$on(evName,callback);
    };
    
    var adminsProducts = [];
    
    this.setProducts = function(products)
    {
        adminsProducts = products;
        console.log("data recived");
    };
    
    this.getProducts = function(){
        console.log("data sent");
        return adminsProducts;
    };

});




