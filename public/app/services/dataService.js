(function() {

    angular.module('app')
        .factory('dataService', function () {

		    return {
		        sayHello: function() {
		            return "Hello from dataService!";
		        }
		    };
        });
})();
