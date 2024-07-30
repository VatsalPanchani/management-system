const express = require('express');
const router = express.Router();
const workingDayController = require('../controllers/workingdayController');

router.get('/workingday', workingDayController.getAllWorkingDays);
router.get('/workingday/:id', workingDayController.getWorkingDayById);

module.exports = router;
