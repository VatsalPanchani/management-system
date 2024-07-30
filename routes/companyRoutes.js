const express = require('express');
const companyController = require('../controllers/companyController');

const router = express.Router();

router.get('/companies', companyController.getAllCompanies);
router.get('/companies/:id', companyController.getCompanyById);

module.exports = router;
