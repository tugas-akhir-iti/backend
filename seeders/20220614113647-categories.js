'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [
      {
        category_name: 'Hobi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Kendaraan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Baju',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Elektronik',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Kesehatan',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ])
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
