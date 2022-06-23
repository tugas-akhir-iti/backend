'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('images', [
      {
         image_name: 'product1-1.png',
         product_id: '1',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         image_name: 'product1-2.png',
         product_id: '1',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         image_name: 'product1-3.png',
         product_id: '1',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         image_name: 'product2-1.png',
         product_id: '2',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         image_name: 'product2-2.png',
         product_id: '2',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         image_name: 'product3-1.png',
         product_id: '3',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         image_name: 'product3-2.png',
         product_id: '3',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         image_name: 'product3-3.png',
         product_id: '3',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         image_name: 'product4-1.png',
         product_id: '4',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         image_name: 'product4-2.png',
         product_id: '4',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         image_name: 'product5-1.png',
         product_id: '4',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         image_name: 'product5-2.png',
         product_id: '5',
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         image_name: 'product5-3.png',
         product_id: '5',
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
