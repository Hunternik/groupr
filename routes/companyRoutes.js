const express = require('express');
const router = express.Router();
const companies_api = require('../apis/companies_api');

// ********* Company Route *********
// Creates new document from recruiter form
router.post('/', companies_api.insertCompany);

// Passes event id and populates list of sponsors
router.get('/:eventId', companies_api.getEventSponsors);

module.exports = router;
