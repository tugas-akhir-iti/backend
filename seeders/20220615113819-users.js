'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
         user_name: 'seller',
         user_email: 'seller@gmail.com',
         user_password: 'seller123',
         user_city: 'Bogor',
         user_address: 'Desa. Jagabita Kec. Parungpanjang',
         user_phone: '089623176509',
         user_image: 'seller.png',
         user_role: '1',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         user_name: 'latif',
         user_email: 'latif@gmail.com',
         user_password: 'latif123',
         user_city: 'Bogor',
         user_address: 'Desa. Jagabita Kec. Parungpanjang',
         user_phone: '089623176509',
         user_image: 'latif.png',
         user_role: '1',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         user_name: 'buyer',
         user_email: 'buyer@gmail.com',
         user_password: 'buyer123',
         user_city: 'Bogor',
         user_address: 'Desa. Jagabita Kec. Parungpanjang',
         user_phone: '089623176509',
         user_image: 'buyer.png',
         user_role: '2',
         createdAt: new Date(),
         updatedAt: new Date()
      }
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
