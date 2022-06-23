'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('products', [
      {
         product_name: 'Deuter Futura Vario 45 + 10 SL',
         product_price: '1600000',
         product_description: 'Baru 1x naik gunung. Ga pernah dicuci. Bersihinnya cuma dilap aja. Lapisan waterproofnya masih bagus. Busa masih tebel dan empuk. Raincover masih muluss. Warna masih cerah. 99% like new.',
         category_id: 1,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'Eiger (S.Tiger claw)',
         product_price: '400000',
         product_description: 'Ukuran 42, warna olive, low cut, KONDISI : 1x pemakaian , Ada tambalan di bagian dalam (sebelah kiri)',
         category_id: 1,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'The North Face Outdoor Jacket',
         product_price: '270000',
         product_description: ' Size L (56x70), Warna Olive Green, KONDISI : 9/10 Minus pemakaian',
         category_id: 1,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'Macbook Pro Retina Non Touchbar 2017',
         product_price: '11000000',
         product_description: `Silver MPXR2 Core i5 Ram 8gb Ssd 128gb 13 inch Non Touch Bar Fullset

         Specs:
         - Processor Intel Core i5 2.3 GHz
         - Ram 8GB
         - Vga Intel Iris i5 Plus Graphics 640
         - Ssd 128gb
         - Force Touch
         - Layar 13 inch Retina Display
         - Web Cam
         - CC 244 Normal
         - OS X Monterey
         
         Kondisi: kemulusan 99% mulus, like new. Fungsi 100% ga ada kerusakan sama sekali. Macbook jarang dipakai, kebanyakan cuma disimpan aja dan pemakaian sangat terawat. Dijamin kondisinya sangat memuaskan.
         
         Kelengkapan: FULLSET (Lengkap semua)
         
         Harga: Rp 11.000.000
         
         Lokasi COD: Jakarta Pusat, Barat, Selatan, dll.`,
         category_id: 4,
         user_id: 2,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'Macbook Air Early 2015 MJVP2',
         product_price: '7000000',
         product_description: `Core i5 Vga Intel HD 6000 Ram 4gb Ssd 256gb 11 inch

         Specs:
         - Processor Intel Core i5 1.6GHz
         - Ram 4GB
         - Vga Intel HD Graphics 6000 (1536 MB)
         - Ssd 256gb
         - Layar 11 inch
         - Web Cam
         - CC Normal
         - OS X Catalina
         
         Kondisi: kemulusan 98% mulus. Fungsi 100% ga ada kerusakan sama sekali dan dijamin memuaskan. Ini macbook jarang dipakai, dan pemakaian sangat terawat.
         
         Kelengkapan: Macbook + Magsafe Ori
         
         Harga: Rp 7.000.000
         
         Lokasi COD: Jakarta Pusat, Barat, Selatan, dll.`,
         category_id: 4,
         user_id: 2,
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
