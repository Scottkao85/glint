angular.module('glint.users', [])

.controller('ProfileCtrl', function($window, $location, UserDetails){
  var self = this;
  self.user = {};

  self.getUser = function(username){
    UserDetails.getUser(username);
    console.log(UserDetails.getUser(username))
  }
  
});
