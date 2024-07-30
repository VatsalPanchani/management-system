const express = require('express');
const router = express.Router();
const userWorkingDayController = require('../controllers/userWorkingdayController');

router.get('/userworkingday', userWorkingDayController.getAllUserWorkingDays);
router.get('/userworkingday/:id', userWorkingDayController.getUserWorkingDayById);

module.exports = router;
