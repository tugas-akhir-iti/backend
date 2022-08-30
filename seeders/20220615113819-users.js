'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
         user_name: 'Petani Suka Maju',
         user_email: 'petani01@gmail.com',
         user_password: '$2b$10$f9FgFf2j2QWgBgrQsywCBuS470Qdgm1VIONZt8B0ClxGWeaSFLFbq',
         user_province: 'Jawa Barat',
         user_regency: 'Kabupaten Bogor',
         user_address: 'Desa. Sukamaju Kec. Megamendung',
         user_phone: '6289623176509',
         bank_id: '1',
         user_rekening: '1151800036',
         user_rekening_name: 'Jaenulatif Pudin',
         user_image: 'https://res.cloudinary.com/drxsjybd2/image/upload/v1659010127/rumah-tani/users/kelompok-tani_gwvtkf.jpg',
         role_id: '1',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         user_name: 'Pasar Serpong',
         user_email: 'pasar01@gmail.com',
         user_password: '$2b$10$6giUhYJn/wUrwmiL9hO6wubzwsx1iP339dxP2YSb5seXpxDW99XC.',
         user_province: 'Banten',
         user_regency: 'Tangerang Selatan',
         user_address: 'Jl. Raya Serpong No.65, Serpong',
         user_phone: '6289623176509',
         user_image: 'https://res.cloudinary.com/drxsjybd2/image/upload/v1659010127/rumah-tani/users/pedagang-pasar_woz1gi.jpg',
         role_id: '2',
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
