const passport = require('passport');

// Login authentication handlers

// Request authentication
module.exports.requestToken = (req, res) => {
  passport.authenticate('google', {
    scope: [ 'profile', 'email' ]
  });
};

// callback route after passport authenticates the first time, run a 2nd time with the token
module.exports.authenticateUser = (req, res) => {
  passport.authenticate('google', (req, res) => {});
};
