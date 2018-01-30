const passport = require('passport');

// Login authentication handlers

// Request authentication
// ********* Google OAuth *********	
module.exports.requestGoogleToken = passport.authenticate('google', {
  scope: [ 'profile', 'email' ],
  prompt: 'select_account'
});

// callback route after passport authenticates the first time, run a 2nd time with the token
module.exports.authenticateGoogleUser = [ passport.authenticate('google'), (req, res) => res.redirect('/event-page') ];



// ********* LinkedIn OAuth *********
module.exports.requestLinkedInToken =  passport.authenticate('linkedin', {
  scope: ['r_basicprofile', 'r_emailaddress']
});

module.exports.authenticateLinkedInUser = [ passport.authenticate('linkedin'), (req, res) => res.redirect('/') ];
