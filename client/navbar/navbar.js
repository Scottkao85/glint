angular.module('glint.navbar', [])

.controller('navbar', function($window){
  var self = this;
  self.token = (localStorage.getItem('com.glint.user'));
   

  
});