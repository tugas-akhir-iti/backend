'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Order_Statuses', [
      {
        status_name: 'Cek Stok Barang',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status_name: 'Diterima',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status_name: 'Dikirim',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status_name: 'Selesai',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status_name: 'Dibatalkan',
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
