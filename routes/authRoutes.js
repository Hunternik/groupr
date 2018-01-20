const express = require('express');
const router = express.Router();
const users_api = require('../apis/users_api');

// ********* Google authRoutes *********	
router.get('/google', users_api.requestGoogleToken);
router.get('/google/callback', users_api.authenticateGoogleUser);

// ********* LinkedIn authRoutes *********
router.get('/linkedin', users_api.requestLinkedInToken);
router.get('/linkedin/callback', users_api.authenticateLinkedInUser);

// ********* all authRoutes *********
router.get('/current_user', (req, res) => {
    res.send(req.user);
});


module.exports = router;