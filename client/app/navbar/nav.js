angular.module('glint.navbar', [])

.controller('navbarCtrl', function($window){
  var self = this;
  self.hey = function(){
    console.log($window.localStorage.getItem('com.glint.user'));
  };
  self.token = $window.localStorage.getItem('com.glint.user');


  
});