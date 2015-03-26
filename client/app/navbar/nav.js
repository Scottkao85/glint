angular.module('glint.navbar', [])


.controller('navbarCtrl', function($window, Auth){
  var self = this;
  // Retrieve Token and Parse String'd Object
  self.token = JSON.parse($window.localStorage.getItem('com.glint'));
  self.username = (self.token) ? self.token.userName : 0; 

  // Auth signout 
  self.signout = Auth.signout;
});