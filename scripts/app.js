var messageDatasource='https://docs.google.com/spreadsheets/d/1A489xTOwSGT3dYNiqhyzB6JvHk8rMUjhAjOQ_bSCDWQ';
var unsubscribeDatasource='https://docs.google.com/spreadsheets/d/1wUilI5prEx6ocuCh91Za_uc_F2cOZx3zzamMO46hSx8';

var app = angular.module('eatsleepcode', ['ngRoute', 'ngSanitize']); 

/* Routing */
app.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {    
		$routeProvider.      
			/* Root */
			when('/', {templateUrl: 'views/send.html', controller: 'PostController'}).
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


function generateUUID(){
	var d = new Date().getTime();
	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = (d + Math.random()*16)%16 | 0;
		d = Math.floor(d/16);
		return (c=='x' ? r : (r&0x7|0x8)).toString(16);
	});
	return uuid;
};
