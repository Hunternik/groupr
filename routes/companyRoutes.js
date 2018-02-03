const express = require('express');
const router = express.Router();
const companies_api = require('../apis/companies_api');

// ********* Sponsor Route *********
router.post('/', companies_api.insertCompany);

// router.get('/', companies_api.getCompany);

module.exports = router;
