const { check, validationResult } = require('express-validator');
const Company = require('../models/Company');
const Employee = require('../models/Employee');

const validateEmployee = [
    // Express Validator middleware
    check('name').notEmpty().withMessage('Name is required'),
    
    check('password')  
    .custom(async (value, { req }) => {
      if (value.length < 8) {
        throw new Error('Password must be at least 8 characters long');
      }
      const existingEmployee = await Employee.findOne({ password: value });
      if (existingEmployee && value.length < 7) {
        throw new Error('This password is already taken');
      }
      return true;
    })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).*$/)
    .withMessage(
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),


    check('email').isEmail().withMessage('Invalid email')
    .custom(async (value, { req }) => {
      const existingEmployee = await Employee.findOne({ email: value });
      if (existingEmployee) {
        if (req.params.id && req.params.id === existingEmployee.id) {
          // If updating existing user, allow the current email
          return;
        }
        
      }
    }),
    
    check('type').notEmpty().withMessage('Type is required')
      .isIn(['admin', 'employee']).withMessage('Invalid type'), 
    
    check('companyId').notEmpty().withMessage('Company ID is required')
      .isInt().withMessage('Invalid Company ID')
      .custom(async (value) => {
      const company = await Employee.findOne({ companyId: value });
      if (!company) {
        throw new Error('Company not found');
      }
    }),

  
    // Custom middleware to handle validation errors
    async (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        // Return a response with validation errors
        return res.status(422).json({ errors: errors.array() });
      }
  
      try {
        // Create a new user based on the validated data
        const newEmployee = new Employee({
          name: req.body.name,
          email: req.body.email,
          type: req.body.type,
          companyId: req.body.companyId,
          password: req.body.password,
        });
  
        // Save the user to the database
        const savedEmployee = await newEmployee.save();
        return res.json({ message: 'Employee added successfully' });

        // Proceed to the next middleware
        next();
      } catch (error) {
        // Handle any error that occurred while saving the user
        return res.status(500).json({ error: 'Employee already exist !!' });
      }
    }
  ];

  module.exports = { validateEmployee };
  