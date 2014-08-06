var app = angular.module('eatsleepcode', ['ngRoute', 'ngSanitize']); 

/* Routing */
app.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {    
		$routeProvider.      
			/* Root */
			when('/', {templateUrl: 'views/blog.html', controller: 'PostController'}).
			when('/send', {templateUrl: 'views/send.html', controller: 'PostController'}).
			when('/send/:postID', {templateUrl: 'views/send.html', controller: 'PostController'}).
			when('/contact', {templateUrl: 'views/contact.html', controller: 'DefaultController'}).
			when('/privacy', {templateUrl: 'views/privacy.html', controller: 'DefaultController'}).
			when('/resources', {templateUrl: 'views/resources.html', controller: 'DefaultController'}).
			when('/terms', {templateUrl: 'views/terms.html', controller: 'DefaultController'}).
			when('/404', {templateUrl: 'views/404.html', controller: 'DefaultController'}).
			otherwise({
				redirectTo: '/404'
			});
			$locationProvider.html5Mode(false);
			$locationProvider.hashPrefix("!");
}]);  


/* Controllers */
app.controller('DefaultController', function($scope) {});

app.controller('PostController', function($scope, $routeParams, $http) {
	$scope.post = $routeParams.postID;
	$scope.data = "";
	$scope.status = "";
});


/* Filters */
app.filter('slice', function() {
  return function(arr, start, end) {
  	arr = arr || [];
  	/* console.log('Slice Arr: ' + arr);
  	console.log('Slice Start: ' + start);
  	console.log('Slice End: ' + end); */
    return arr.slice(start, end);
  };
});


