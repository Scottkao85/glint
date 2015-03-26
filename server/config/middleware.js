// Server-Side Middleware
// ----------------------
//
// The middleware connects the Express server app with the Express routers and configures the Express app to use additional modules such as body-parser, and morgan.

// Allows for parsing of POST request body.
var bodyParser  = require('body-parser');
// Error logging and handling helper functions.
var helpers = require('./helpers.js'); 
// Logs requests sent from the client.
var morgan = require('morgan'); 

module.exports = function (app, express) {

  // Create Express routers for each type of route.
  var ideaRouter = express.Router();
  var userRouter = express.Router();
  var voteRouter = express.Router();
  var collaboratorRouter = express.Router();
  var commentRouter = express.Router();

  // Associate the Express server app with the different modules that it should use.
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));
  app.use(morgan('dev'));
  app.use(helpers.logErrors);
  app.use(helpers.handleErrors);

  // Use the idea router for all idea requests.
  app.use('/api/ideas', ideaRouter); 
  // Use user router for requests related to users and accounts
  app.use('/api/users', userRouter);
  // Use vote router for requests related to upvoting or downvoting.
  app.use('/api/vote', voteRouter);
  // Use collaborator router for requests related to collaborators.
  app.use('/api/collaborators', collaboratorRouter);
  // Use comment router for requests related to adding and getting comments.
  app.use('/api/comments', commentRouter);



  // Inject our Express routers into their respective route files.
  require('../ideas/ideaRoutes.js')(ideaRouter);
  require('../users/usersRoutes.js')(userRouter);
  require('../votes/voteRoutes.js')(voteRouter);
  require('../collaborators/collaboratorRoutes.js')(collaboratorRouter);
  require('../comments/commentRoutes.js')(commentRouter);
};
