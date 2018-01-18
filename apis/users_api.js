const passport = require('passport');

// Login authentication handlers

// Request authentication
module.exports.requestToken = passport.authenticate('google', {
  scope: [ 'profile', 'email' ]
});

// callback route after passport authenticates the first time, run a 2nd time with the token
module.exports.authenticateUser = passport.authenticate('google', (req, res) => {});
