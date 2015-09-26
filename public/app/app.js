(function() {

    var app = angular.module('app', []);

    app.provider('books', function() {
        var name = 'Book Logger';
        var desc;

        return {
          setDesc: function(value) {
            desc = value;
          },
        // PROVIRER COMES WITH GET FUNCTION
          $get: function() {
            return {
              appName: name,
              appDesc: desc
            };        
          }  
        };
    });

    app.config(function (booksProvider) {
      booksProvider.setDesc("Track which books you read.");
    });

}());
