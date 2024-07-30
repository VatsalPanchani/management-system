const { DataTypes } = require('sequelize');
const db = require('../database');

const WorkingDay = db.define('WorkingDay', {
  dayname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = WorkingDay;
