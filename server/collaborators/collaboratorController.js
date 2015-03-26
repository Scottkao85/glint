// Idea Controller
// ---------------
//
// The idea controller handles requests passed from the idea router.

// The Q module is used to bind Mongoose methods to use promises.
var Q = require('q');
var User = require('../users/usersModel.js');
var Idea = require('../ideas/ideaModel.js');
// var ObjectId = require('mongoose').Types.ObjectId;
// var Controller = require('./ideaModel.js');

module.exports = {
  newCollaborator: function (req, res, next){
    var collab = req.body;
    console.log('collab:', collab);
    var idea_id = collab.idea_id;
    var username = collab.username;
    var role = collab.role;

    var findIdea = Q.nbind(Idea.findOne, Idea);
    findIdea( {_id: idea_id } )
      .then(function (idea) {
        console.log('idea is', idea);
        if (!idea) {
          next(new Error('Idea does not exist'));
        } else {
          console.log(idea);
          idea.collaborators.push({
            username: username,
            role: role
          });
          idea.save(function(err){
            if (err) return handleError(err);
            res.send(idea);
          });
        }
      })
      .fail(function (error) {
        next(error);
      });
  },
  // Not necessary at current scale, because a query to AllIdeas has all the collaborators in it
  allCollaborators: function (){
  }
};
