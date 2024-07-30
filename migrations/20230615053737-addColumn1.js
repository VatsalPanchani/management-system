'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
    //  */
    await queryInterface.addColumn('UserWorkingDays', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: true
    }) 

    await queryInterface.addColumn('UserWorkingDays', 'workingdayId', {
      type: Sequelize.INTEGER,
      allowNull: true
    }) 

    await queryInterface.addConstraint('UserWorkingDays', {
      
      fields: ['userId'],
      type: 'foreign key',        
      name: 'userId1',
      references: {
        table: 'Employees',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    
  });

  await queryInterface.addConstraint('UserWorkingDays', {
      
    fields: ['workingdayId'],
    type: 'foreign key',        
    name: 'workingdayId1',
    references: {
      table: 'WorkingDays',
      field: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  
  });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    
     await queryInterface.removeConstraint('UserWorkingDays', 'userId');
     await queryInterface.removeConstraint('UserWorkingDays', 'workingdayId');
     await queryInterface.removeColumn('UserWorkingDays', 'userId');
     await queryInterface.removeColumn('UserWorkingDays', 'workingdayId')

  }
};
