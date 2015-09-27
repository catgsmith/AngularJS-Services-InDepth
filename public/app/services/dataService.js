(function() {

    angular.module('app')
        .factory('dataService', function () {

		    //API for the service
            return {
                getAllBooks: getAllBooks
            };

		    function getAllBooks() {

                return [{
                    book_id: 1,
                    title: 'Harry Potter and the Deathly Hallows',
                    author: 'J.K. Rowling',
                    yearPublished: 2000
                }, {
                    book_id: 2,
                    title: 'The Cat in the Hat',
                    author: 'Dr. Seuss',
                    yearPublished: 1957
                }, {
                    book_id: 3,
                    title: 'Encyclopedia Brown, Boy Detective',
                    author: 'Donald J. Sobol',
                    yearPublished: 1963
                }];
            }
        });
})();
