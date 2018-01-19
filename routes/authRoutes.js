const express = require('express');
const router = express.Router();
const users_api = require('../apis/users_api');

// Google auth routes
router.get('/google', users_api.requestToken);
router.get('/google/callback', users_api.authenticateUser);
router.get('/current_user', (req, res) => {
    res.send(req.user);
});

module.exports = router;