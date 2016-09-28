'use strict';

// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sites/:siteId', {templateUrl: 'partials/siteDetail.html', controller: 'siteDetailCtrl'}).
	otherwise({redirectTo: '/sites/moby-dick'});
}]);

