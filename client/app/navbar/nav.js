angular.module('glint.navbar', [])


.controller('navbarCtrl', function($window, Auth, UserInfo){
  var self = this;
  // Retrieve Token and Parse String'd Object
  self.token = JSON.parse($window.localStorage.getItem('com.glint'));
  if(self.token !== null){
    self.username = self.token.username;
  }else{
    self.username = "user name unavailable";
  };

  // self.username = UserInfo.getUsername();

  // Auth signout 
  self.signout = Auth.signout;
});