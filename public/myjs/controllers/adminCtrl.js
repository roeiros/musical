//app.controller("adminCtrl", function($scope, adminService) {
//    
//    $scope.productsForAdmin = adminService.getProducts();
//
//    $scope.picToOpen = null;
//
//    $scope.backGroundOpening = null;
//
//    $scope.openThisPic = function(pic){
//        $scope.backGroundOpening = true;
//        $scope.picToOpen = pic;   
//     };
//     
//     $scope.outOfPic = function(){
//        $scope.picToOpen = null;
//        $timeout(function()
//        {
//          $scope.backGroundOpening = null;
//        }, 500);
//        return;
//     }; 
//     
//});
app.controller('adminCtrl', ['$scope', 'Upload', '$timeout', function ($scope, Upload, $timeout) {
    $scope.product = {
        name : 'Some shit',
        stock : 10,
        price : 5,
        categories : new Array(1)
    };
    $scope.uploadPic = function(file) {
        file.upload = Upload.upload({
          url: 'upload',
          data: {product: $scope.product, file: file},
        });
        file.upload.then(function (response) {
          $timeout(function () {
            file.result = response.data;
          });
        }, function (response) {
          if (response.status > 0)
            $scope.errorMsg = response.status + ': ' + response.data;
        }, function (evt) {
          // Math.min is to fix IE which reports 200% sometimes
          file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        });
    }
}]);


