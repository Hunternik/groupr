const express = require('express');
const router = express.Router();
const events_api = require('../apis/events_api');

// ********* Event Route *********
router.get('/:id', events_api.getEvent);
router.post('/quiz/pass', events_api.addPassQuiz);
router.post('/quiz/fail', events_api.addFailQuiz);

module.exports = router;
