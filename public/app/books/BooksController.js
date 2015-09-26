(function() {
  
  angular.module('app')
        .controller('BooksController', function ($scope, books) { 
    
    	$scope.appName = books.appName;
    	$scope.appDesc = books.appDesc;
  });  
}());