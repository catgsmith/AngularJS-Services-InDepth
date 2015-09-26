(function() {

    var app = angular.module('app', []);
    
    app.config(function($provide) {
    
     $provide.provider('books', function() {
       
       // PROVIRER COMES WITH GET FUNCTION
        this.$get = function () {
          var appName = 'Book Logger';
          var appDesc = 'Track which books you read.';
          
          return {
            appName: appName,
            appDesc: appDesc
          };
        };
     });
    });
}());