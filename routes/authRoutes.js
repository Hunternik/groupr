const express = require('express');
const router = express.Router();
const users_api = require('../apis/users_api');

// ********* Google authRoutes *********	
router.get('/google', users_api.requestGoogleToken);
router.get('/google/callback', users_api.authenticateGoogleUser);

// ********* LinkedIn authRoutes *********
router.get('/linkedin', users_api.requestLinkedInToken);
router.get('/linkedin/callback', users_api.authenticateLinkedInUser);

// ********* TOTP authRoutes *********
router.get('/auth/totpsetup', users_api.requestQrCode);

router.get('/auth/login-otp', users_api.qrCodeSetupCompleted);

router.post('/auth/login-otp', users_api.confirmOtpCode);




// ********* current user *********
router.get('/current_user', (req, res) => {
  res.send(req.user);
});

// ********* logout *********
router.get('/logout', (req, res) => {
  req.logout();
  // redirect the user back to the root
  res.redirect('/');
});

module.exports = router;