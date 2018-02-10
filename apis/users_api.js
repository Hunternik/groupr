const populatePath = require("./constants/populatePath");
const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('user');
const base32 = require ('thirty-two');
const Totp = mongoose.model('totp');
const requireLogin = require('../routes/middleware/requireLogin');
const utils = require ('../utils/utils');


// Login authentication handlers

// Request authentication
// ********* Google OAuth *********
module.exports.requestGoogleToken = passport.authenticate('google', {
  scope: [ 'profile', 'email' ],
  prompt: 'select_account'
});

// callback route after passport authenticates the first time, run a 2nd time with the token
module.exports.authenticateGoogleUser = [ passport.authenticate('google'), (req, res) => res.redirect('/') ];

// ********* LinkedIn OAuth *********
module.exports.requestLinkedInToken = passport.authenticate('linkedin', {
  scope: [ 'r_basicprofile', 'r_emailaddress' ]
});

module.exports.authenticateLinkedInUser = [ passport.authenticate('linkedin'), (req, res) => res.redirect('/') ];

module.exports.updateProfile = async (req, res) => {
	const { _id, ...updatedProfile } = req.body;

  try {
		let user = await User.findByIdAndUpdate(_id, updatedProfile, {new: true});
		
		user = await User.populate(user, populatePath.userPath);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

// ********* Totp OAuth *********
module.exports.requestQrCode = (req, res, next) => {
  const id = req.session.passport.user;
  Totp.findOne({_id:id}, (err, user) => {
    if (err) { 
      return next(err); 
    }
    
    if (user) {
      // two-factor auth has already been setup
      var encodedKey = base32.encode(user.key);
      
      // generate QR code for scanning into Google Authenticator
      // reference: https://code.google.com/p/google-authenticator/wiki/KeyUriFormat
      var otpUrl = 'otpauth://totp/' + req.user.email
                + '?secret=' + encodedKey + '&period=' + (user.period || 30) + '&issuer=Groupr:%20Do%20What%20You%20Love';
      var qrImage = 'https://chart.googleapis.com/chart?chs=166x166&chld=L|0&cht=qr&chl=' + encodeURIComponent(otpUrl);
      
      res.json({qrImage: qrImage});
      
    } 
    else {
      // new two-factor setup.  generate and save a secret key
      var key = utils.randomKey(10);
      var encodedKey = base32.encode(key);
      
      // generate QR code for scanning into Google Authenticator
      // reference: https://code.google.com/p/google-authenticator/wiki/KeyUriFormat
      var otpUrl = 'otpauth://totp/' + req.user.email
                  + '?secret=' + encodedKey + '&period=30&issuer=Groupr:%20Do%20What%20You%20Love';
      var qrImage = 'https://chart.googleapis.com/chart?chs=166x166&chld=L|0&cht=qr&chl=' + encodeURIComponent(otpUrl);
  
      Totp.findOne(req._id, { key: key, period: 30 }, (err) => {
        if (err) { 
          return next(err); 
        }

        const totpSetup = { 
          _id: req.user._id,
          // email: req.user.emails.value,
          key: key,
          period: 30
        };
        // save to db
        Totp(totpSetup).save();
        
        res.json({qrImage: qrImage});
      });
    }
  });
};

module.exports.qrCodeSetupCompleted = requireLogin, (req, res, next) => {
  // If user hasn't set up two-factor auth, redirect
  Totp.findOne(req._id, (err, user) => {
    if (err) { 
      return next(err); 
    }
    if (!user) { 
      return res.redirect('/'); 
    }
    // else do nothing
  });
};

module.exports.confirmOtpCode = [ passport.authenticate('totp')];

