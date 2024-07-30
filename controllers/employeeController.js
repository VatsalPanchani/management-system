const e = require('express');
const Employee = require('../models/Employee');
const bcrypt = require("bcrypt");
const { where } = require('sequelize');
const jwt = require("jsonwebtoken");
const multer = require('multer');
const { Op } = require('sequelize');

const secretKey = require("../secretkey");
// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const search = ""; 
    const employees = await Employee.findAll({
      limit: 5,
      offset: 0,
      where: {
        [Op.or]: [
          { name: { [Op.like]: `%${search}%` } },
          { email: { [Op.like]: `%${search}%` } }
        ]
      }
    });
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


// Retrieve employees with type 'admin' from the database
exports.getAdminEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll({ where: { type: 'admin'} });
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving admin employees.' });
  }
};

// Retrieve employees with type 'employee' from the database
exports.getEmployeeEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll({ where: { type: 'employee'} });
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving employee employees.' });
  }
};

// Retrieve an employee by ID from the database
exports.getEmployeeById = async (req, res) => {
  try {
    const employees = await Employee.findOne({ where: { id: req.params.id} });
    //return employee;
  } catch (error) {
    // Handle error
    console.error('Error finding employee:', error);
    throw error;
  }
};

// hashing password
Employee.beforeSave(async (employees) => {
  if (employees.changed('password')) {
    const hashedPassword = await bcrypt.hash(employees.password, 6);
    employees.password = hashedPassword;
  }
});

Employee.prototype.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

//.............................//
//............CRUD.............//
//.............................//
//.............................//


exports.createEmployee = async (req, res) => {
  
  try {
    const {name, password, email, type, companyId} = req.body;
    const data = await Employee.create({
      name,
      password,
      email,
      type,
      companyId
    })
    return res.status(200).json({data});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    var updatedData = req.body;
    const data = await Employee.update(updatedData,
      {
        where : {
          id: req.params.id
        }
      });
    return res.sendStatus(200).json({data:data});
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const employees = await Employee.findByPk(id);
    if (!employees) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    const data = await employees.destroy({where : {id: req.params.id}});
    return res.sendStatus(200).json({data:data});
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};



//......................//
//........Login.........//
//......................//

exports.signup = async (req, res) => {

  try {console.log("enter in sign up");
    const { name, email, password, type, companyId } = req.body;
    const data = {
      name,
      email,
      password: await bcrypt.hash(password, 6),
      type,
      companyId
    };
    
    //saving the employees
    const employees = await Employee.create(data);
    
    //if employee details is captured
    //generate token with the employee's id and the secretKey in the env file
    // set cookie with the token generated
    if (employees) {
      let token = jwt.sign({ id: employees.id }, "jsbasa", {
        expiresIn: 1 * 24 * 60 * 60 * 1000,
      });
 
      // res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
      console.log("employees", JSON.stringify(employees, null, 2));
      console.log(token);

      //send users details
      return res.status(200).send(employees);
    } else {
      return res.status(409).send("Details are not correct");
    }
  } catch (error) {
    console.log(error);
  }
};
  
//login authentication
 
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find an employee by their email
    const employee = await Employee.findOne({
      where: {
        email: email
      }
    });

    // If employee email is found, compare password with bcrypt
    if (employee) {
      const isSame = await employee.comparePassword(password);

      // If password is the same
      if (isSame) {
        let token = jwt.sign({ id: employee.id }, "psdans", {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });
        console.log("\nLogin Successful\n");
        console.log("Employee:", JSON.stringify(employee, null, 2));
        console.log("Token:", token);
        return res.status(200).send(employee);
      } else {
        return res.status(401).send("Authentication failed!");
      }
    } else {
      return res.status(401).send("Authentication failed!");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Failed to authenticate' });
  }
};



//............................................//
//..........Multer configuration..............//
//............................................//

// Controller action for uploading user's image
exports.uploadImage = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (req.file) {
      // Update the user's image_file field with the filename
      employee.image_file = req.file.filename;
      await employee.save();
    }

    return res.status(200).json({ success: 'Image uploaded successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to upload image' });
  }
};

// module.exports = {
//   signup,
//   login,
// };