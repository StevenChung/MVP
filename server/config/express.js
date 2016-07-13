// express based scripts to initialize here
var bodyParser = require('body-parser');
var morgan = require('morgan');
var session = require('express-session');
// var passport = require('passport');

module.exports = {
  setup: function(app) {
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(session({
      secret: 'pls-based-god'
    }));
    // app.use(passport.initialize());
    // app.use(passport.session());
  }
  // passport: passport;
}

// export everything that is required by express & stuff that was previously
// run in app.js in a large block
