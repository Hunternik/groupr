const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const ToptStrategy = require('passport-totp').Strategy;

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