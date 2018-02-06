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
const googleService = require('./utils/serviceHandler');

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
		googleService.serviceHandler
  )
);
