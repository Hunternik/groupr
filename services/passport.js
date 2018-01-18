const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const TotpStrategy = require('passport-totp').Strategy;
const mongoose = require("mongoose");
const keys = require('../config/keys');
const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id })
        .then((existingUser) => {
          if (existingUser) {
            done(null, existingUser);
          } else {
            new User({ googleId: profile.id }).save()
              .then(user => done(null, user));
          }
        });

    }
  )
);

// Linkedin Login info, will set up later
// passport.use(
//   new LinkedInStrategy(
//     {
//       clientID: LINKEDIN_KEY,
//       clientSecret: LINKEDIN_SECRET,
//       callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback",
//       scope: ["r_emailaddress", "r_basicprofile"]
//     },
//     (accessToken, refreshToken, profile, done) => {
//       process.nextTick(function() {
//         // To keep the example simple, the user's LinkedIn profile is returned to
//         // represent the logged-in user. In a typical application, you would want
//         // to associate the LinkedIn account with a user record in your database,
//         // and return that user instead.
//         return done(null, profile);
//       });
//     }
//   )
// );

// passport.use(
//   new TotpStrategy(function(user, done) {
//     TotpKey.findOne({ userId: user.id }, function(err, key) {
//       if (err) {
//         return done(err);
//       }
//       return done(null, key.key, key.period);
//     });
//   })
// );
