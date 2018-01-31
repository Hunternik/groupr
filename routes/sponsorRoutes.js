const express = require('express');
const router = express.Router();
const sponsors_api = require('../apis/sponsors_api');

// ********* Sponsor Route *********	
router.post('/:id', sponsors_api.getEvent);

module.exports = router;