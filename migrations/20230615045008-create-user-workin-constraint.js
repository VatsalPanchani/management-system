'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /*await queryInterface.createTable('userWorkinConstraints', {
      
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Employees',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      workingDayId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'WorkingDays',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      
    });*/
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('userWorkinConstraints');
  }
};