'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserWorkingDays', [
      {
        userId: 1,
        workingDayId: 2,        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        workingDayId: 3,        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        workingDayId: 4,        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        workingDayId: 5,        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        workingDayId: 6,        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        workingDayId: 7,        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        workingDayId: 8,        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 8,
        workingDayId: 9,        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 9,
        workingDayId: 10,        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 10,
        workingDayId: 11,        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserWorkingDays', null, {})
  }
};
