var myApp = angular.module('myApp');
myApp.controller('booksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){

	console.log('ln 4 controller');
	$scope.getBooks = function(){

		$http.get('#!/../library/books').success(function(response){

			$scope.books = response;
		});
	}

}]);