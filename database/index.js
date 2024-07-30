const { Sequelize } = require('sequelize');
const config = require('../config/config');

const db = new Sequelize(config.development);

const sequelize = new Sequelize('relation_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log // Enable logging
});

module.exports = db;
