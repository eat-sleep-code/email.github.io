var app = angular.module('eatsleepcode', ['ngRoute', 'ngSanitize']); 

/* Routing */
app.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {    
		$routeProvider.      
			/* Root */
			when('/', {templateUrl: 'views/blog.html', controller: 'BlogController'}).
			when('/blog', {templateUrl: 'views/blog.html', controller: 'BlogController'}).
			when('/blog/:postID', {templateUrl: 'views/blog.html', controller: 'BlogController'}).
			when('/contact', {templateUrl: 'views/contact.html', controller: 'DefaultController'}).
			when('/privacy', {templateUrl: 'views/privacy.html', controller: 'DefaultController'}).
			when('/resources', {templateUrl: 'views/resources.html', controller: 'DefaultController'}).
			when('/terms', {templateUrl: 'views/terms.html', controller: 'DefaultController'}).
			/* CSS */
			when('/css/origami', {templateUrl: 'views/css/origami.html', controller: 'DefaultController'}).
			when('/css/rotated-ellipse', {templateUrl: 'views/css/rotated-ellipse.html', controller: 'DefaultController'}).
			/* DotNetNuke */
			when('/dotnetnuke/battleship', {templateUrl: 'views/dotnetnuke/battleship.html', controller: 'DefaultController'}).
			when('/dotnetnuke/dictionary', {templateUrl: 'views/dotnetnuke/dictionary.html', controller: 'DefaultController'}).
			when('/dotnetnuke/feedback', {templateUrl: 'views/dotnetnuke/feedback.html', controller: 'DefaultController'}).
			when('/dotnetnuke/google-sitemaps', {templateUrl: 'views/dotnetnuke/google-sitemaps.html', controller: 'DefaultController'}).
			when('/dotnetnuke/meetup', {templateUrl: 'views/dotnetnuke/meetup.html', controller: 'DefaultController'}).
			when('/dotnetnuke/module-info', {templateUrl: 'views/dotnetnuke/module-info.html', controller: 'DefaultController'}).
			when('/dotnetnuke/redirector', {templateUrl: 'views/dotnetnuke/redirector.html', controller: 'DefaultController'}).
			when('/dotnetnuke/share-on-facebook', {templateUrl: 'views/dotnetnuke/share-on-facebook.html', controller: 'DefaultController'}).
			when('/dotnetnuke/site-map', {templateUrl: 'views/dotnetnuke/site-map.html', controller: 'DefaultController'}).
			/* JavaScript */
			when('/javascript/dropdown-with-other-field', {templateUrl: 'views/javascript/dropdown-with-other-field.html', controller: 'DefaultController'}).
			when('/javascript/jquery-maskedinput-placeholder', {templateUrl: 'views/javascript/jquery-maskedinput-placeholder.html', controller: 'DefaultController'}).
			when('/javascript/jquery-stylesheet-insertion', {templateUrl: 'views/javascript/jquery-stylesheet-insertion.html', controller: 'DefaultController'}).
			when('/javascript/jquery-validate-custom', {templateUrl: 'views/javascript/jquery-validate-custom.html', controller: 'DefaultController'}).
			when('/javascript/storage', {templateUrl: 'views/javascript/storage.html', controller: 'DefaultController'}).
			/* Net - C# */
			when('/net/c/common-classes', {templateUrl: 'views/net/c/common-classes.html', controller: 'DefaultController'}).
			when('/net/c/embed-external-content', {templateUrl: 'views/net/c/embed-external-content.html', controller: 'DefaultController'}).
			when('/net/c/mvc4-cache-manifest', {templateUrl: 'views/net/c/mvc4-cache-manifest.html', controller: 'DefaultController'}).
			/* Net - VB */
			when('/net/vb/common-classes', {templateUrl: 'views/net/vb/common-classes.html', controller: 'DefaultController'}).
			/* Powershell */
			when('/powershell/iis-setup', {templateUrl: 'views/powershell/iis-setup.html', controller: 'DefaultController'}).
			when('/powershell/unblock-files', {templateUrl: 'views/powershell/unblock-files.html', controller: 'DefaultController'}).
			/* Utilities */
			when('/utilities/excel-to-csv', {templateUrl: 'views/utilities/excel-to-csv.html', controller: 'DefaultController'}).
			when('/utilities/excel-to-xml', {templateUrl: 'views/utilities/excel-to-xml.html', controller: 'DefaultController'}).
			when('/404', {templateUrl: 'views/404.html', controller: 'DefaultController'}).
			otherwise({
				redirectTo: '/404'
			});
			$locationProvider.html5Mode(false);
			$locationProvider.hashPrefix("!");
}]);  


/* Controllers */
app.controller('DefaultController', function($scope) {});

app.controller('BlogController', function($scope, $routeParams, $http) {
	$scope.post = $routeParams.postID;
	$http({method: 'GET', url: '//eat-sleep-code.com/data/blog.xml'}).
		success(function(data, status) {
			var x2js = new X2JS();
			var jsonObject = x2js.xml_str2json(data);
			$scope.data = jsonObject;
			$scope.status = status;
			
			/* Paging */
			$scope.currentPage = 0;
    			$scope.pageSize = 10;
    			/* console.log('DATA: ' + JSON.stringify(jsonObject));
			console.log('STATUS: ' + status); */
			$scope.numberOfItems = jsonObject.blog.article.length;    
			$scope.numberOfPages = Math.ceil($scope.numberOfItems/$scope.pageSize); 
			/* console.log('DATA - Number Of Items :' + $scope.numberOfItems);
			console.log('DATA - Number Of Pages :' + $scope.numberOfPages); */
			
		}).
		error(function(data, status) {
			$scope.data = data || "Request failed";
			$scope.status = status;
			console.log('STATUS: ' + status);
		});
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


/* Directives */
app.directive('dynFbComments', function ($http) {
    function createHTML(href, numposts, colorscheme, mobile, width) {
	console.log('Loading comments box...');
	$('.facebook').show();
	$('.facebook-error').hide();
        return '<div class="fb-comments" ' +
                       'data-href="' + href + '" ' +
                       'data-numposts="' + numposts + '" ' +
                       'data-colorsheme="' + colorscheme + '" ' +
                       'data-mobile="' + mobile + '" ' +
                       'data-width="' + width + '">' +
               '</div>';
    }

    return {
        restrict: 'A',
        scope: {},
        link: function postLink(scope, elem, attrs) {
            attrs.$observe('pageHref', function (newValue) {
                var href        = newValue;
                var numposts    = attrs.numposts    || 5;
                var colorscheme = attrs.colorscheme || 'light';
                var mobile = attrs.mobile || 'false';
                var width = attrs.width || '100%';
                elem.html(createHTML(href, numposts, colorscheme, mobile, width));
                FB.XFBML.parse(elem[0]);
            });
        }
    };
});

app.directive('dynFbLike', function ($http) {
    function createHTML(href, layout, action, showfaces, share) {
	console.log('Loading "Like" badge...');
        $('.facebook').show();
	$('.facebook-error').hide();
        return '<div class="fb-like" ' +
               'data-href="' + href + '" ' +
               'data-layout="' + layout + '" ' +
               'data-action="' + action + '" ' +
               'data-show-faces="' + showfaces + '" ' +
               'data-share="' + share + '">' +
       '</div>';
    }

    return {
        restrict: 'A',
        scope: {},
        link: function postLink(scope, elem, attrs) {
            attrs.$observe('pageHref', function (newValue) {
                var href        = newValue;
                var layout    = attrs.layout    || 'box_count';
                var action = attrs.action || 'like';
                var showfaces = attrs.showfaces || 'true';
                var share = attrs.share || 'true%';
                elem.html(createHTML(href, layout, action, showfaces, share));
                FB.XFBML.parse(elem[0]);
            });
        }
    };
});

