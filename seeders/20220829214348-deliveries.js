'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Deliveries', [
      {
        delivery_name: 'Diantar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        delivery_name: 'Dijemput',
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
