//var emailErr = document.getElementById('emailErr');
//function signup(e){
//    e.preventDefault();
//    var emailVal = document.getElementById("mail").value;
//    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//    if(pattern.test(emailVal)===true)
//    {
//        $.ajax({
//            type: "POST",
//            url: '/user/signup',
//            data: {
//                name  : frmSignup.user_name.value,
//                email : frmSignup.user_email.value
//            },
//            success: function(){
//                alert('user added');
//            },
//            error : function(){
//                emailErr.style.display = 'block';
//            }
//        });
//    }
//    else
//    {
//        $("#emailErr").text( emailVal + " is not a valid email");
//        emailErr.style.display = 'block';
//    }
//}
//
//$('#mail').keydown(function() {
//    if (emailErr.style.display == 'block'){
//        emailErr.style.display = 'none';
//    }
//});

var app = angular.module("Music", []);

app.filter('ctgfilt', function() {
  return function(products,ctg) {
    if ( !ctg ) return products;
    var productsToReturn = [];   
    products.forEach(function(pr){
        if (pr.categories.indexOf(ctg) > -1) productsToReturn.push(pr);
    });    
    return productsToReturn;
  };
});
app.controller("ShopCtrl", function($scope) {
  $scope.cart = [];
  $scope.products = [
        {
            name:'Jeans', 
            price: 20,
            pic: 'http://riverisland.scene7.com/is/image/RiverIsland/280526_main?$CrossSellProductPage514$',
            categories: ["sport", "clothing", "menswear"],
            stock : 4
        },
        {
            name:'Shirt', 
            price: 15,
            pic: 'http://charliemenswear.com/wp-content/uploads/2016/03/pepe-teal-plain-men-shirt.jpg',
            categories: ["sport", "clothing", "menswear","summer"],
            stock : 8
        },
        {
            name:'Bicycle', 
            price: 50,
            pic: 'http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2015/12/Fortified-Bicycle-Invincible-Theft-Proof-Bike-10.jpg',
            categories: ["sport", "summer", "transportation", "fun"],
            stock : 3
        },
        {
            name:'Tennis', 
            price: 14,
            pic: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQfbo79cDXhBLgdvBmhXdBCX4gjvZX_Xl0GZShTOzePy67vZjzwMw',
            categories: ["sport", "summer", "fun"],
            stock : 5
        },
        {
            name:'Shorts', 
            price: 13,
            pic: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQVaAv_v7WIAlaDt3Pkhy498iixvt9TXiFEEksOKn_KtJaRNn2o-A',
            categories: ["sport", "summer", "fun", "clothing", "menswear"],
            stock : 10
        },
        {
            name:'Avocado', 
            price: 3,
            pic: 'http://www.oahufresh.com/wp-content/uploads/2015/07/avo.jpg',
            categories: ["food", "health","summer"],
            stock : 15
        },
        {
            name:'Remote car', 
            price: 80,
            pic: 'http://www.neatstuff.net/cars-trucks/Remote-cars/gas/Gas-Car-Mustang-10146T3-C.jpg',
            categories: ["sport", "fun",'hobbies'],
            stock : 8
        },
        {
            name:'Drone', 
            price: 420,
            pic: 'http://blogs-images.forbes.com/frankbi/files/2015/04/Phantom-3-3-e1428477888137-1940x1089.jpg',
            categories: ["sport", "fun", "photo","summer"],
            stock : 17
        },
        {
            name:'Guitar', 
            price: 75,
            pic: 'http://i.ebayimg.com/00/s/MzAwWDMwMA==/z/bR8AAOSwxH1T~u32/$_35.JPG?set_id=2',
            categories: ["fun", "hobbies", "summer"],
            stock : 13
        },
        {
            name:'Tredmill', 
            price: 150,
            pic: 'http://shop.lifefitness.com/UserFiles/Images/Products/F1-Smart-Treadmill-L.jpg',
            categories: ["sport", "health", "hobbies","summer"],
            stock : 13
        }
        ];
        
        var getCtgs = function(filteredItems){
           var ctgs = [];
           filteredItems.forEach(function(it){                 
               it.categories.forEach(function(ctg){
                   if ( ctgs.indexOf(ctg) === -1 ) ctgs.push(ctg);                 
               }) ;            
           });          
           $scope.ctgs = ctgs;
       };
       
       $scope.addToCart = function(item){
           if (item.disabled) return;
           var indexOfItem = $scope.cart.indexOf(item); //2
           if (indexOfItem > -1){              
                $scope.cart[indexOfItem].quantity++;
                if ( item.stock === item.quantity ) item.disabled = true;                
           } else {
               item.quantity = 1;   
               $scope.cart.push(item);
           } 
           getTotal();          
       };
       function setDisabled(index,bool){
           if ($scope.cart[index].quantity === $scope.cart[index].stock){
                $scope.products[$scope.products.indexOf($scope.cart[index])].disabled = bool;
           }
       }
       function getTotal(){
           $scope.total = 0;
           $scope.cart.forEach(function(it){
               $scope.total += ( it.quantity * it.price);
           });
       }
       $scope.manageItemQuantity = function(index,op) {            
            if (op === '-'){
                setDisabled(index,false);
                ($scope.cart[index].quantity > 1) ? 
                $scope.cart[index].quantity -= 1 : 
                $scope.cart.splice(index, 1);
            } else {
                $scope.cart[index].quantity++;
                setDisabled(index,true);
            }  
            getTotal();
       };
            
       $scope.$watch('filtered', function(newVal) {
           if (newVal) getCtgs(newVal);                                       
       });
});




