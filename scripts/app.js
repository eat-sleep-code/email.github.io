// Global Variables
var serviceName = 'emailapp.eat-sleep-code.com';
var serviceRootUrl = 'http://emailapp.eat-sleep-code.com/#!';
var serviceEmail = 'info@eat-sleep-code.com';
				
// Data Connections
var messageDatasourceWrite = 'https://docs.google.com/forms/d/1Q79Y1ETyJU0ffMreELbiIY5qf2OjGdeyNrzNMXip2Lc/formResponse';
var messageDatasourceRead = 'https://docs.google.com/spreadsheets/d/1A489xTOwSGT3dYNiqhyzB6JvHk8rMUjhAjOQ_bSCDWQ#gid=0';
var unsubscribeDatasourceWrite = 'https://docs.google.com/forms/d/1JkF4sP5G4HVJAAlP4NKPVlnFaJQtAXm6yL2I8dLPwtE/formResponse';
var unsubscribeDatasourceRead = 'https://docs.google.com/spreadsheets/d/1wUilI5prEx6ocuCh91Za_uc_F2cOZx3zzamMO46hSx8#gid=0';

var app = angular.module('eatsleepcode', ['ngRoute', 'ngSanitize']); 

/* Routing */
app.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {    
		$routeProvider.      
			/* Root */
			when('/', {templateUrl: 'views/message.html', controller: 'MessageController'}).
			when('/message', {templateUrl: 'views/message.html', controller: 'MessageController'}).
			when('/send', {templateUrl: 'views/message.html', controller: 'MessageController'}).
			when('/message/:messageID', {templateUrl: 'views/message.html', controller: 'MessageController'}).
			when('/reply/:messageID', {templateUrl: 'views/message.html', controller: 'MessageController'}).
			when('/unsubscribe', {templateUrl: 'views/unsubscribe.html', controller: 'UnsubscribeController'}).
			when('/unsubscribe/:emailAddress', {templateUrl: 'views/unsubscribe.html', controller: 'UnsubscribeController'}).
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

app.controller('MessageController', function($scope, $routeParams, $http) {
	$scope.message = $routeParams.messageID;
	$scope.data = '';
	$scope.status = '';
});

app.controller('UnsubscribeController', function($scope, $routeParams, $http) {
	$scope.email = $routeParams.emailAddress;
	$scope.data = '';
	$scope.status = '';
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
