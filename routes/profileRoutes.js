const express = require('express');
const router = express.Router();
const requireLogin = require('./middleware/requireLogin');
const users_api = require('../apis/users_api');

router.post('/', requireLogin, users_api.updateProfile);

module.exports = router;
