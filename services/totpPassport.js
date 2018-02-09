const passport = require('passport');
const TotpStrategy = require('passport-totp').Strategy;
const mongoose = require ('mongoose');
const Totp = mongoose.model('totp');

mongoose.Promise = global.Promise;


passport.use(
	'totp', new TotpStrategy(
    function (user, done) {
    // setup function, supply key and period to done callback
    console.log("********* TotpStrategy - user: ", user);
    console.log("********* TotpStrategy - done 1: ", done);
    Totp.findOne({_id: user.id}, (err, obj) => {
      console.log("********* TotpStrategy - id: ", {_id: user.id});
      console.log("********* TotpStrategy - obj: ", obj);
      console.log('********* TotpStrategy - obj.key: ', obj.key);
      console.log('********* TotpStrategy - obj.period: ', obj.period);
      //console.log('********* TotpStrategy - done 2: ', done(null, obj.key, obj.period));
      if (err) {
        console.log('********* TotpStrategy - errr: ', err)
        return done(err);
			}
      // console.log('********* TotpStrategy - done: ', done(null, obj.key, obj.period))
      return done(null, obj.key, obj.period);
    });
  }
));




