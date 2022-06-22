'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', [
      {
        category_name: 'hobi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'kendaraan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'baju',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'elekronik',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'kesehatan',
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
