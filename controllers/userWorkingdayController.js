const UserWorkingDay = require('../models/UserWorkingDay');

exports.getAllUserWorkingDays = async (req, res) => {
  try {
    const userWorkingDays = await UserWorkingDay.findAll();
    res.status(200).json(userWorkingDays);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving user working days.' });
  }
};

exports.getUserWorkingDayById = async (req, res) => {
  const userWorkingDayId = req.params.userWorkingDayId;

  try {
    const userWorkingDay = await UserWorkingDay.findOne(id);
    if (!userWorkingDay) {
      res.status(404).json({ error: 'User working day not found.' });
    } else {
      res.status(200).json(userWorkingDay);
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the user working day.' });
  }
};
