const passport = require('passport');
const TotpStrategy = require('passport-totp').Strategy;
const mongoose = require ('mongoose');
const Totp = mongoose.model('totp');
const { serialize, deserialize } = require("./utils/serialize");

mongoose.Promise = global.Promise;

passport.serializeUser(serialize);

passport.deserializeUser(deserialize);

passport.use(
	'totp', new TotpStrategy(
    function (user, done) {
    // setup function, supply key and period to done callback
    Totp.findOne({_id: user.id}, (err, obj) => {
      if (err) {
        return done(err);
			}
      return done(null, obj.key, obj.period);
    });
  }
));




