const { DataTypes } = require('sequelize');
const db = require('../database');
const Employee = require('./Employee');
const WorkingDay = require('./WorkingDay');

const UserWorkingDay = db.define('UserWorkingDay', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  workingdayId: {
    type: DataTypes.INTEGER,
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

Employee.belongsToMany(WorkingDay, { through: UserWorkingDay, foreignKey: 'userId' });
WorkingDay.belongsToMany(Employee, { through: UserWorkingDay, foreignKey: 'workingDayId' });

module.exports = UserWorkingDay;
