(function() {
  
  angular.module('app')
        .controller('BooksController', function ($scope, books) { 
    
    	$scope.appName = books.appName;
    	console.log("Books: "+ books.appName);
  });
  
}());