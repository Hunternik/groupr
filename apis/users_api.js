const passport = require('passport');

// Login authentication handlers

// Request authentication
// ********* Google OAuth *********	
module.exports.requestGoogleToken = passport.authenticate('google', {
  scope: [ 'profile', 'email' ]
});

// callback route after passport authenticates the first time, run a 2nd time with the token
// module.exports.authenticateUser = [ passport.authenticate('google'), (req, res) => res.redirect('/') ];
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
// mike: revised below. why include the 2nd part above?
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
module.exports.authenticateGoogleUser = passport.authenticate('google');



// ********* LinkedIn OAuth *********
module.exports.requestLinkedInToken = passport.authenticate('linkedin', {
  scope: ['r_basicprofile', 'r_emailaddress']
});

module.exports.authenticateLinkedInUser = passport.authenticate('linkedin');
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
// mike: do we need to include the 2nd part?
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm