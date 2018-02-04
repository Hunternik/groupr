const express = require('express');
const router = express.Router();
const requireLogin = require('./middleware/requireLogin');
const quiz_api = require('../apis/quiz_api');

router.get('/', requireLogin, quiz_api.getQuiz);

module.exports = router;
