const WorkingDay = require('../models/WorkingDay');

exports.getAllWorkingDays = async (req, res) => {
  try {
    const workingDays = await WorkingDay.findAll();
    res.status(200).json(workingDays);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving working days.' });
  }
};

exports.getWorkingDayById = async (req, res) => {
  const workingDayId = req.params.workingDayId;

  try {
    const workingDay = await WorkingDay.findOne(id);
    if (!workingDay) {
      res.status(404).json({ error: 'Working day not found.' });
    } else {
      res.status(200).json(workingDay);
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the working day.' });
  }
};
