var app = angular.module('glint', [
  'glint.services',
  'glint.ideas',
  'glint.votes',
  'glint.auth',
  'ngAnimate'
  ])

.filter('moment', function () {
  return function (dateString) {
      return moment(dateString).fromNow();
  };
});
