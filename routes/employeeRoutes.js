const express = require('express');
const employeeController = require('../controllers/employeeController');
const saveEmployee = require('../middleware/employeeAuth')
const router = express.Router();
const { validateEmployee } = require('../middleware/validator');
const { validateLogin } = require('../middleware/loginValidator');
const upload = require('../middleware/multerMiddleware');

router.get('/employees', employeeController.getAllEmployees);
router.get('/employees/admin', employeeController.getAdminEmployees);
router.get('/employees/employee', employeeController.getEmployeeEmployees);
router.post('/employees/create', employeeController.createEmployee);
router.patch('/employees/update/:id', employeeController.updateEmployee);
router.delete('/employees/delete/:id', employeeController.deleteEmployee);
router.post('/signup',validateEmployee, employeeController.signup);
router.post('/login', validateLogin, employeeController.login);
router.post('/employees/:id/upload', upload.single('image'), employeeController.uploadImage);

module.exports = router;
