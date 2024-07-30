const { check, validationResult } = require('express-validator');
const Employee = require('../models/Employee');

const validateLogin = [
  // Express Validator middleware
  check('email').isEmail().withMessage('Invalid email'),

  check('password').notEmpty().withMessage('Password is required'),

  // Custom middleware to handle validation errors
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Return a response with validation errors
      return res.status(422).json({ errors: errors.array() });
    }

    try {
      const { email, password } = req.body;

      // Check if the employee exists
      const employee = await Employee.findOne({ email });

      if (!employee) {
        return res.status(401).json({ error: 'valid email or password' });
      }

      // Check if the password is correct
      const isPasswordValid = await employee.comparePassword(password);

      if (isPasswordValid) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Store the authenticated employee in the request object
      req.employee = employee;

      // Proceed to the next middleware
      next();
    } catch (error) {
      // Handle any error that occurred while validating login
      return res.status(500).json({ error: 'Failed to validate login' });
    }
  }
];

module.exports = { validateLogin };
