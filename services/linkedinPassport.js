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
			proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ linkedInId: profile.id })
			if (existingUser) {
        return done(null, existingUser);
			} 
			const user = await User({ linkedInId: profile.id }).save()
			done(null, user);
		}
	)
);



