const { DataTypes } = require('sequelize');
const db = require('../database');
const Company = require('./Company');

//const { generateToken, verifyToken } = require('../jwt');
const Employee = db.define('Employee', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  companyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('admin', 'employee'),
    allowNull: false,
  },
  image_file: {
    type: DataTypes.STRING,
    allowNull: true,
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

//Association
Employee.belongsTo(Company, { foreignKey: 'companyId' });
Company.hasMany(Employee, {  });

/*Employee.prototype.generateAuthToken = function () {
  const tokenPayload = { id: this.id, email: this.email }; // Customize payload as per your requirements
  return generateToken(tokenPayload);
};

Employee.verifyAuthToken = function (token) {
  return verifyToken(token);
};
*/
module.exports = Employee;
