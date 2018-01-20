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
// mike: the others are /auth but 'current_user' should be /api
router.get('/current_user', (req, res) => {
    res.send(req.user);
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
// mike: add 'logout'? need to create the route /api? 
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
});


module.exports = router;