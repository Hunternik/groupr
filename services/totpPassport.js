const passport = require('passport');
const TotpStrategy = require('passport-totp').Strategy;
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
	new TotpStrategy(
  function(user, done) {
    TotpKey.findOne({ userId: user.id }, function (err, key) {
			if (err) { return done(err); 
		}
      return done(null, key.key, key.period);
    });
  })
);


