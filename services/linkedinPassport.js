const passport = require("passport");
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
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
  new LinkedInStrategy(
    {
      clientID: keys.linkedInClientID,
      clientSecret: keys.linkedInClientSecret,
      callbackURL: "/auth/linkedin/callback",
      scope: ["r_basicprofile", "r_emailaddress"],
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
			console.log(profile);
      // Search for user by authentication ID
      let existingUser = await User.findOne({ linkedInId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const linkedinUser = {
        linkedInId: profile.id,
        displayName: profile.displayName,
        lastName: profile.name.familyName,
        firstName: profile.name.givenName,
        email: profile.emails[0].value,
        iconPhotoURL: profile.photos[0].value,
				bigPhotoURL: profile._json.pictureUrls.values[0],
				linkedInProfileURL: profile._json.publicProfileUrl
      };

      // Check to see if user already exists by comparing email addresses
      existingUser = await User.findOne({ email: linkedinUser.email });

      // If email exists, update user record with new authentication ID
      if (existingUser) {
				existingUser.linkedInId = linkedinUser.linkedInId;
				existingUser.linkedInProfileURL = linkedinUser.linkedInProfileURL;

        try {
          existingUser = await existingUser.save();

          return done(null, existingUser);
        } catch (error) {
          console.log(error);
        }
      }

			// Create a new user record is user does not exist
      const user = await User(linkedinUser).save();
      done(null, user);
    }
  )
);
