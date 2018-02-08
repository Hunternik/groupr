const express = require('express');
const router = express.Router();
const companies_api = require('../apis/companies_api');

// ********* Company Route *********
// Creates new document from recruiter form
router.post('/', companies_api.insertCompany);

module.exports = router;
