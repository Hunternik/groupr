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
			const existingUser = await User.findOne({ googleId: profile.id });
			
      if (existingUser) {
        done(null, existingUser);
			}
			
      const googleUser = {
        googleId: profile.id,
        displayName: profile.displayName,
        lastName: profile.name.familyName,
        firstName: profile.name.givenName,
        email: profile.emails[0].value,
        iconPhotoURL: profile.photos[0].value,
        bigPhotoURL: profile._json.cover.coverPhoto.url
      };

      const user = await new User(googleUser).save();
      done(null, user);
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
