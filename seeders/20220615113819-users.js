'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
         user_name: 'seller01',
         user_email: 'seller01@gmail.com',
         user_password: '$2b$10$vJXP/rxnjYtlskBbXLnRzOvKqmMRDTkyKMnh84lUYJ0pVoXfokCGW',
         user_regency: 'Bogor',
         user_address: 'Desa. Jagabita Kec. Parungpanjang',
         user_phone: '089623176509',
         user_role: '1',
         user_province: 'Jawa Barat',
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
