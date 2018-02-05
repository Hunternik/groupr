const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
// mike: not sure if this is used here
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
// const TotpStrategy = require('passport-totp').Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");
const { serialize, deserialize } = require("./utils/serialize");

passport.serializeUser(serialize);

passport.deserializeUser(deserialize);

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      let existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const googleUser = {
        googleId: profile.id,
        displayName: profile.displayName,
        lastName: profile.name.familyName,
        firstName: profile.name.givenName,
        email: profile.emails[0].value,
        iconPhotoURL: profile.photos[0].value,
				bigPhotoURL: profile._json.cover.coverPhoto.url,
				googleProfileURL: profile._json.url
      };

      // Check to see if user already exists by comparing email addresses
      existingUser = await User.findOne({ email: googleUser.email });

      // If email exists, update user record with new authentication ID
      if (existingUser) {
				existingUser.googleId = googleUser.googleId;
				existingUser.googleProfileURL = googleUser.googleProfileURL

        try {
					existingUser = await existingUser.save();
					
          return done(null, existingUser);
        } catch (error) {
          console.log(error);
        }
      }

			// Create a new user record is user does not exist
      const user = await new User(googleUser).save();
      done(null, user);
    }
  )
);
