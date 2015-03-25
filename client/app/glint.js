// Glint
// -----
//
// This is our app's main Angular module.

// Our dependencies are by shared services, feature controllers, and third-party modules.
var app = angular.module('glint', [
  'glint.services',
  'glint.ideas',
  'glint.votes',
  'glint.auth',
  'glint.comments',
  'ngAnimate',
  'ngRoute'
  ])

// Routing configuration, determines which view and controller to use
.config(function($routeProvider){
	$routeProvider
		.when('/', {
        templateUrl: 'app/ideas/ideas.html',
        controller: "IdeasCtrl as ictrl"
      })
    .when('/login', {
        templateUrl: 'app/auth/login.html',
        controller: "AuthCtrl as actrl"
      })
    .when('/signup', {
        templateUrl: 'app/auth/signup.html',
        controller: "AuthCtrl as actrl"
      })
    .when('/ideas', {
        templateUrl: 'app/auth/signup.html',
        controller: "AuthCtrl as actrl"
      })
    .otherwise({
        redirectTo: '/'
      });
})

// Custom filter for applying moment.js to our timestamps.
.filter('moment', function () {
  return function (dateString) {
      return moment(dateString).fromNow();
  };
});
