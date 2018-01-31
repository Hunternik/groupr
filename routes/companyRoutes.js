const express = require('express');
const router = express.Router();
const companies_api = require('../apis/companies_api');

// ********* Sponsor Route *********	
router.post('/:id', companies_api.getEvent);

module.exports = router;