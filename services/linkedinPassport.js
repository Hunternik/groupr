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
const linkedInService = require('./utils/serviceHandler');

passport.serializeUser(serialize);

passport.deserializeUser(deserialize);

passport.use(
  new LinkedInStrategy(
    {
      clientID: keys.linkedInClientID,
      clientSecret: keys.linkedInClientSecret,
      callbackURL: "/auth/linkedin/callback",
			scope: ["r_basicprofile", "r_emailaddress"],
			profileFields: ['id', 'name', 'displayName', 'emails', 'pictureUrls', 'publicProfileUrl'],
      proxy: true
		},
		linkedInService.serviceHandler
  )
);
