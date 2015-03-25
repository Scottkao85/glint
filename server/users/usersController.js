// User Controller
// ---------------
//
// The User controller handles requests passed from the User router.

// The bcrypt module is used to salt and encrypt passwords
var bcrypt = require('bcrypt');
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
    var username = req.body.username;
    var password = req.body.password;
    console.log('request has:', username, password);
    // (use below as model)
    // // Bind the Mongoose create method to the Idea model, so that the Q module can use promises with it.
    // var createIdea = Q.nbind(Idea.create, Idea);

    // // Create a new document from the Idea model. If successfully created then the new Idea document is returned.
    // var newIdea = {
    //   title: req.body.title,
    //   text: req.body.text
    // };

    // createIdea(newIdea)
    //   .then(function (createdIdea) {
    //     if (createdIdea) {
    //         res.json(createdIdea);
    //     }
    //   })
    //   .fail(function(error) {
    //     next(error);
    //   });
  }

};
