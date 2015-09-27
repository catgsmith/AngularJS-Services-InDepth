(function() {

    angular.module('app')
        .controller('BooksController', function($scope, books, dataService) {

            $scope.appName = books.appName;
            $scope.appDesc = books.appDesc;
            $scope.hello = dataService.sayHello();
        });
}());
