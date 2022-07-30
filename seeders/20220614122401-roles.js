'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Roles', [
      {
         role_name: 'Petani',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         role_name: 'Pasar',
         createdAt: new Date(),
         updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
