const express = require('express');
const router = express.Router();
const events_api = require('../apis/events_api');

// ********* Event Route *********	
router.get('/:id', events_api.getEvent);

module.exports = router;