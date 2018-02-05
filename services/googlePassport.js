const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
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
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      let existingUser = await User.findOne({ googleId: profile.id }).populate("events");

      if (existingUser) {
        return done(null, existingUser);
      }

      const googleUser = {
        googleId: profile.id || '',
        displayName: profile.displayName || '',
        lastName: profile.name.familyName || '',
        firstName: profile.name.givenName || '',
        email: profile.emails[0].value || '',
        iconPhotoURL: profile.photos[0].value || ''
        // bigPhotoURL: profile._json.cover.coverPhoto.url
      };

      // Check to see if user already exists by comparing email addresses
      existingUser = await User.findOne({ email: googleUser.email });

      // If email exists, update user record with new authentication ID
      if (existingUser) {
        existingUser.googleId = googleUser.googleId;

        try {
					existingUser = await existingUser.save();
					existingUser.populate("events")

          return done(null, existingUser);
        } catch (error) {
          console.log(error);
        }
      }

      const user = await new User(googleUser).save();
      done(null, user);
    }
  )
);
