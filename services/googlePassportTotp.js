const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('users');
const TotpStrategy = require('passport-totp').Strategy;
const base32 = require('thirty-two');
const utils = require('../utils/utils');
const loggedin = require('connect-ensure-login');
const app = express();


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
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id }).save().then(user => done(null, user));
        }
      });
    }
  )
);

passport.use(
  new TotpStrategy(
  function(user, done) {
    User.findOne({ googleId: user.id }, function (err, obj) {
      console.log('googleQR', obj.key)
      if (err) { return done(err); }
      return done(null, obj.key, obj.period);
    });
  }
));


app.get('/totp-setup', loggedin.ensureLoggedIn(), function(req, res, next){
  User.findOne(req.user.id, function(err, obj) {
    if (err) { return next(err); }
    if (obj) {
      // two-factor auth has already been setup
      var encodedKey = base32.encode(obj.key);
      
      // generate QR code for scanning into Google Authenticator
      // reference: https://code.google.com/p/google-authenticator/wiki/KeyUriFormat
      // var otpUrl = 'otpauth://totp/' + req.user.email + '?secret=' + encodedKey + '&period=&issuer=Mike%20Yamato' + (obj.period || 30);
      // var qrImage = 'https://chart.googleapis.com/chart?chs=166x166&chld=L|0&cht=qr&chl=' + encodeURIComponent(otpUrl);
      
      res.redirect('/totp-setup', { user: req.user, key: encodedKey, qrImage: qrImage });
    } else {
      // new two-factor setup.  generate and save a secret key
      var key = utils.randomKey(10);
      var encodedKey = base32.encode(key);
      
      // generate QR code for scanning into Google Authenticator
      // reference: https://code.google.com/p/google-authenticator/wiki/KeyUriFormat
      var otpUrl = 'otpauth://totp/' + req.user.email + '?secret=' + encodedKey + '&period=30&issuer=Mike%20Yamato';
      var qrImage = 'https://chart.googleapis.com/chart?chs=166x166&chld=L|0&cht=qr&chl=' + encodeURIComponent(otpUrl);
  
      saveKeyForUserId(req.user.id, { key: key, period: 30 }, function(err) {
        if (err) { return next(err); }
        res.redirect('/totp-setup', { user: req.user, key: encodedKey, qrImage: qrImage });
        console.log('qr', req.user);
      });
    }
  });
});


app.get('/login-otp', loggedin.ensureLoggedIn(),
  function(req, res, next) {
    // If user hasn't set up two-factor auth, redirect
    User.findOne(req.user.id, function(err, obj) {
      if (err) { return next(err); }
      if (!obj) { return res.redirect('/totp-setup'); }
      return next();
    });
  },
  function(req, res) {
    res.render('login-otp', { user: req.user, message: req.flash('error') });
  });

app.post('/login-otp', 
  passport.authenticate('totp', { failureRedirect: '/login-otp', failureFlash: true }),
  function(req, res) {
    req.session.secondFactor = 'totp';
    res.redirect('/');
  });

// POST /login
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
//
//   curl -v -d "username=bob&password=secret" http://127.0.0.1:3000/login
// look at users_api
app.post('/google', 
  passport.authenticate('google', { failureRedirect: '/google', failureFlash: true }),
  function(req, res) {
    res.redirect('/event-page');
  });





  
/* test out after more pages are created

// To view account details, user must be authenticated using two factors
app.get('/account', loggedin.ensureLoggedIn(), ensureSecondFactor, function(req, res){
  res.render('account', { user: req.user });
});

function ensureSecondFactor(req, res, next) {
  if (req.session.secondFactor == 'totp') { return next(); }
  res.redirect('/login-otp')
}

*/