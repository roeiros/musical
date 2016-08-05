app.controller("productCtrl",function($scope,cartService){ 
        $scope.products = [
            {
                id  : 1,
                name:'Jeans', 
                price: 20,
                pic: 'http://riverisland.scene7.com/is/image/RiverIsland/280526_main?$CrossSellProductPage514$',
                categories: ["sport", "clothing", "menswear","Show all..."],
                stock : 4
            },
            {
                id  : 2,
                name:'Shirt', 
                price: 15,
                pic: 'http://charliemenswear.com/wp-content/uploads/2016/03/pepe-teal-plain-men-shirt.jpg',
                categories: ["sport", "clothing", "menswear","summer","Show all..."],
                stock : 8
            },
            {
                id  : 3,
                name:'Bicycle', 
                price: 50,
                pic: 'http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2015/12/Fortified-Bicycle-Invincible-Theft-Proof-Bike-10.jpg',
                categories: ["sport", "summer", "transportation", "fun","Show all..."],
                stock : 3
            },
            {
                id  : 4,
                name:'Tennis', 
                price: 14,
                pic: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQfbo79cDXhBLgdvBmhXdBCX4gjvZX_Xl0GZShTOzePy67vZjzwMw',
                categories: ["sport", "summer", "fun","Show all..."],
                stock : 5
            },
            {
                id  : 5,
                name:'Shorts', 
                price: 13,
                pic: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQVaAv_v7WIAlaDt3Pkhy498iixvt9TXiFEEksOKn_KtJaRNn2o-A',
                categories: ["sport", "summer", "fun", "clothing", "menswear","Show all..."],
                stock : 10
            },
            {
                id  : 6,
                name:'Avocado', 
                price: 3,
                pic: 'http://www.oahufresh.com/wp-content/uploads/2015/07/avo.jpg',
                categories: ["food", "health","summer","Show all..."],
                stock : 15
            },
            {
                id  : 7,
                name:'Remote car', 
                price: 80,
                pic: 'http://www.neatstuff.net/cars-trucks/Remote-cars/gas/Gas-Car-Mustang-10146T3-C.jpg',
                categories: ["sport", "fun",'hobbies',"Show all..."],
                stock : 8
            },
            {
                id  : 8,
                name:'Drone', 
                price: 420,
                pic: 'https://3dr.com/wp-content/uploads/2015/11/3DR_SOLO-OVERVIEW_21.png',
                categories: ["sport", "fun", "photo","summer","Show all..."],
                stock : 17
            },
            {
                id  : 9,
                name:'Guitar', 
                price: 75,
                pic: 'http://i.ebayimg.com/00/s/MzAwWDMwMA==/z/bR8AAOSwxH1T~u32/$_35.JPG?set_id=2',
                categories: ["fun", "hobbies", "summer","Show all..."],
                stock : 13
            },
            {
                id  : 10,
                name:'Tredmill', 
                price: 150,
                pic: 'http://shop.lifefitness.com/UserFiles/Images/Products/F1-Smart-Treadmill-L.jpg',
                categories: ["sport", "health", "hobbies","summer","Show all..."],
                stock : 13
            }
        ];
        
        $scope.addToCart = function(item){
            cartService.addToCart(item);
            cartService.broadcast('updateCart');
        };

        var getCtgs = function(filteredItems){
           var ctgs = ["Show all..."];
           filteredItems.forEach(function(it){                 
               it.categories.forEach(function(ctg){
                   if ( ctgs.indexOf(ctg) === -1 ) ctgs.push(ctg);                 
               }) ;            
           });          
           $scope.ctgs = ctgs;
       };
       
       $scope.$on('setDisabled',function(b,data){
           var product = $scope.products.filter(function( obj ) {
                return obj.id == data.id;
           });
           product[0].disabled = data.disabled;
       });
       
        $scope.$watch('filtered', function(newVal) {
           if (newVal) getCtgs(newVal);                                       
        });
});


