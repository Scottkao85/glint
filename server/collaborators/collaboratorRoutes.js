// Collaborator Routes
// -----------
//
// The Collaborator routes further routes any requests to /api/collaborators in the middleware to specific Collaborator methods defined in the Collaborator controller.

var collaboratorController = require('./collaboratorController.js');

module.exports = function (app) {
    // Further route from the /api/collaborators path. A GET will return all of the collaborators for an idea. A POST will add a new collaborator to the database.
    app.route('/')
      .get(collaboratorController.allCollaborators)
      .post(collaboratorController.newCollaborator);
};
