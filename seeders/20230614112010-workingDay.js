'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('WorkingDays', [
      {
        dayname: 'Mon',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dayname: 'Tue',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dayname: 'Wed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dayname: 'Thu',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dayname: 'Fri',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dayname: 'Sat',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dayname: 'Mon',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dayname: 'Wed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dayname: 'Fri',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dayname: 'Sun',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('WorkingDays', null, {});
  }
};
