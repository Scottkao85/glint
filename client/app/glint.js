// Glint
// -----
//
// This is our app's main Angular module.

// Our dependencies are by shared services, feature controllers, and third-party modules.
var app = angular.module('glint', [
  'glint.services',
  'glint.ideas',
  'glint.ideaDetail',
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
<<<<<<< HEAD
    .when('/ideas/:_id', {
=======
    .when('/ideas/:_id/contributors', {
        templateUrl: 'app/ideaDetail/ideaDetail.html',
        controller: "IdeaContributorsCtrl as icbctrl"
      })
    .when('/ideas/:_id/comments', {
>>>>>>> Create separate folder for idea detail page
        templateUrl: 'app/ideas/ideaDetail.html',
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
