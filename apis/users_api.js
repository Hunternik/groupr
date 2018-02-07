const populatePath = require("./constants/populatePath");
const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('user');

// Login authentication handlers

// Request authentication
// ********* Google OAuth *********
module.exports.requestGoogleToken = passport.authenticate('google', {
  scope: [ 'profile', 'email' ],
  prompt: 'select_account'
});

// callback route after passport authenticates the first time, run a 2nd time with the token
module.exports.authenticateGoogleUser = [ passport.authenticate('google'), (req, res) => res.redirect('/') ];

// ********* LinkedIn OAuth *********
module.exports.requestLinkedInToken = passport.authenticate('linkedin', {
  scope: [ 'r_basicprofile', 'r_emailaddress' ]
});

module.exports.authenticateLinkedInUser = [ passport.authenticate('linkedin'), (req, res) => res.redirect('/') ];

module.exports.updateProfile = async (req, res) => {
	const { _id, ...updatedProfile } = req.body;

  try {
		let user = await User.findByIdAndUpdate(_id, updatedProfile, {new: true});
		
		user = await User.populate(user, populatePath.userPath);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
