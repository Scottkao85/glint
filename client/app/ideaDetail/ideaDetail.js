// Ideas controller
// ----------------
//

// The pattern we're using here is the pattern we're using across all our controllers: the controllerAs syntax. This syntax is for Angular versions 1.2 and up, and means you don't have to use `$scope` anymore. Instead, inside of your HTML, you declare your controller with `ng-controller="IdeasCtrl as ictrl"` and reference your variables within that controlled scope as `ictrl.<varname>`. Additionally, instead of setting your properties within your controller to `$scope`, assign your controller's `this` to a variable called self and set your properties to that. 
angular.module('glint.ideaDetail', [])
.controller('IdeaCollaboratorsCtrl', function (IdeaDetail, Ideas, $filter, $route){
  var self = this;
  self.postSuccess = false;
  self.submitted = false;
  self.newCollaborator = {};

  self.init = function(){
    self._id = $route.current.params._id;
    IdeaDetail.getIdea(self._id).then(function(idea){
      self.idea = idea;
      self.collaborators = self.idea.collaborators;
      // TODO: figure out whether current user is creator or a collaborator
      // self.userIsCreator = 
      // self.userIsCollaborator = 
    });
  };

  // Submit a new idea.
  self.submitCollaborator = function ($timeout){
    console.log('submitting yourself as a collaborator');



    // Escape user input.
    self.newCollaborator.username = 'Miguel';
    self.newCollaborator.idea_id = self._id;
    self.newCollaborator.role = _.escape(self.newCollaborator.role);
    var collab = JSON.stringify(self.newCollaborator);
    console.log("collab: ", collab);
    
    // POST new idea, display confirmation, redisplay all ideas.
    IdeaDetail.addCollaborator(collab)
      .then(function (response){
        // Show user feedback.
        self.postSuccess = true;
        // Hide idea description field.
        self.submitted = false;
      })
      .catch(function (error){
        console.error('createIdea error', error);
      });
    
  };

  self.init();
});
