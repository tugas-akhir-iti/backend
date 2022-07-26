'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [
      {
        category_name: 'Sayuran',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Buah-Buahan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category_name: 'Rempah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
