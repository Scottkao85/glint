// User Controller
// ---------------
//
// The User controller handles requests passed from the User router.

// The bcrypt module is used to salt and encrypt passwords
var bcrypt = require('bcrypt');
var User = require('./usersModel');
var util = require('../config/helpers');
// var session = require('express-session');

module.exports = {

  
  // Log in an existing user, create a session
  login: function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    console.log('request has:', username, password);

    // (use below as model)
    // // Bind the Mongoose find method to the Idea model, so that the Q module can use promises with it.
    // var findAllIdeas = Q.nbind(Idea.find, Idea);
    
    // findAllIdeas({})
    //   .then(function(ideas) {
    //     res.json(ideas);
    //   })
    //   .fail(function(error) {
    //     next(error);
    //   });
  },

  // Sign up a new user, and start their first session
  signup: function(req, res, next) {
    console.log('at sign up');
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({ username: username })
    .exec(function(err, user) {
      if (!user) {
        console.log('new users')
        var newUser = new User({
          username: username,
          password: password
        });
        newUser.save(function(err, newUser) {
          if (err) {
            res.send(500, err);
          }
          util.createSession(req, res, newUser);
        });
      } else {
        console.log('Account already exists');
        res.redirect('/#/signup');
      }
    });
  }

};
