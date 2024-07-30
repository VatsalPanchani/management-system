const Company = require('../models/Company');

// Get all companies
exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving companies.' });
  }
};

exports.getCompanyById = async (req, res) => {
  const companyId = req.params.companyId;

  try {
    const company = await Company.findOne(id);
    if (!company) {
      res.status(404).json({ error: 'Company not found.' });
    } else {
      res.status(200).json(company);
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the company.' });
  }
};