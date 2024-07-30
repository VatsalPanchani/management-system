'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /*await queryInterface.addConstraint('Employees', {
      
        fields: [''],
        type: 'foreign key',        
        name: 'companyId',
        references: {
          model: 'Companies',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Employees');
  }*/
}
};