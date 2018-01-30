const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
// mike: not sure if this is used here
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
// const TotpStrategy = require('passport-totp').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  // user.id is referencing the unique id created by mongoDB.
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new LinkedInStrategy(
    {
      clientID: keys.linkedInClientID,
      clientSecret: keys.linkedInClientSecret,
			callbackURL: '/auth/linkedin/callback',
			scope: [ 'r_basicprofile', 'r_emailaddress'],
			proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
			// Search for user by authentication ID
			let existingUser = await User.findOne({ linkedInId: profile.id });
			
			if (existingUser) {
        return done(null, existingUser);
			} 

			const linkedinUser = {
        linkedinId: profile.id,
        displayName: profile.displayName,
        lastName: profile.name.familyName,
        firstName: profile.name.givenName,
        email: profile.emails[0].value,
        iconPhotoURL: profile.photos[0].value,
        // bigPhotoURL: profile._json.cover.coverPhoto.url
			};
			// Check to see if user already exists by comparing email addresses
			existingUser = await User.findOne({ email: linkedinUser.email });
			// If email exists, update user record with new authentication ID
			if (existingUser) {
				existingUser.linkedinId = linkedinUser.linkedinId;

				existingUser = await existingUser.save();
				console.log(existingUser);
				return done(null, existingUser);
			}
			
			const user = await User(linkedinUser).save()
			done(null, user);
		}
	)
);



