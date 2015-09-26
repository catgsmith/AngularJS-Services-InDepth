(function() {

    var app = angular.module('app', []);

    app.provider('books', function() {        
        var name = 'Book Logger';
        var desc;
        var includeVersionInTitle = false;
        var version = "1.0";

        return {
          setDesc: function(value) {
            desc = value;
          },
          setIncludeVersionInTitle: function (value) {
            includeVersionInTitle = value;
          },
        // PROVIRER COMES WITH GET FUNCTION
          $get: function() {
            if (includeVersionInTitle) {
                name += ' ' + version;
            }
            return {
              appName: name,
              appDesc: desc
            };        
          }  
        };
    });

    app.config(function (booksProvider) {
      booksProvider.setDesc("Track which books you read.");
      booksProvider.setIncludeVersionInTitle(true);
    });

}());
