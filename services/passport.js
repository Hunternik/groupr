const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const TotpStrategy = require('passport-totp').Strategy;
const keys = require('../config/keys');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('profile', profile);
    }
  )
);

passport.use(
  new TotpStrategy(function(user, done) {
    TotpKey.findOne({ userId: user.id }, function(err, key) {
      if (err) {
        return done(err);
      }
      return done(null, key.key, key.period);
    });
  })
);
