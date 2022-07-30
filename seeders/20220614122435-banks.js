'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Banks', [
      {
        bank_name: 'Bank BCA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bank_name: 'Bank Mandiri',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bank_name: 'Bank BSI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bank_name: 'Bank Citybank',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bank_name: 'Bank Jago',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bank_name: 'Bank BNI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bank_name: 'Bank BRI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bank_name: 'Bank Mybank',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bank_name: 'Bank DKI',
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
