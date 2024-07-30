'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Companies', [
      {
        Id: 1,
        name: 'Teksun',
        address: 'Ahemedabad',
        email: 'teksun@gmail.com',
        contact: '1234567890',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 2,
        name: 'ab',
        address: 'Ahemedabad',
        email: 'ab@gmail.com',
        contact: '2234567890',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 3,
        name: 'cd',
        address: 'Rajkot',
        email: 'cd@gmail.com',
        contact: '2334567890',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 4,
        name: 'ef',
        address: 'Rajkot',
        email: 'ef@gmail.com',
        contact: '2344567890',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 5,
        name: 'gh',
        address: 'Vadodara',
        email: 'gh@gmail.com',
        contact: '2345567890',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 6,
        name: 'ij',
        address: 'Vadodara',
        email: 'ij@gmail.com',
        contact: '2345667890',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 7,
        name: 'kl',
        address: 'Surat',
        email: 'kl@gmail.com',
        contact: '2345677890',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 8,
        name: 'mn',
        address: 'Surat',
        email: 'mn@gmail.com',
        contact: '2345678890',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 9,
        name: 'op',
        address: 'Junaghadh',
        email: 'op@gmail.com',
        contact: '2345678990',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Id: 10,
        name: 'qr',
        address: 'Junaghadh',
        email: 'qr@gmail.com',
        contact: '2345678900',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Companies', null, {});
  }
};
