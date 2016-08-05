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


