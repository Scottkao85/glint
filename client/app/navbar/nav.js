angular.module('glint.navbar', [])

<<<<<<< HEAD
.controller('navbarCtrl', function($window, Auth){
  var self = this;
  // Retrieve Token and Parse String'd Object
  self.token = JSON.parse($window.localStorage.getItem('com.glint'));
  self.username = (self.token) ? self.token.userName : 0; 

  // Auth signout 
  self.signout = Auth.signout;
=======
.controller('navbarCtrl', function($window){
  var self = this;
  self.hey = function(){
    console.log($window.localStorage.getItem('com.glint.user'));
  };
  self.token = $window.localStorage.getItem('com.glint.user');


  
>>>>>>> add: feature, able to see logged in user name in navbar
});