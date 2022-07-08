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
     return queryInterface.bulkInsert('Products', [
      {
         product_name: 'Deuter Futura Vario 45 + 10 SL',
         product_price: '1600000',
         product_description: 'Baru 1x naik gunung. Ga pernah dicuci. Bersihinnya cuma dilap aja. Lapisan waterproofnya masih bagus. Busa masih tebel dan empuk. Raincover masih muluss. Warna masih cerah. 99% like new.',
         product_image: 'https://res.cloudinary.com/dallchrvc/image/upload/v1656080269/Deuter_Futura_Vario_45_10_SL_u1x2ce.jpg',
         product_available: true,
         category_id: 1,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'Eiger (S.Tiger claw)',
         product_price: '400000',
         product_description: 'Ukuran 42, warna olive, low cut, KONDISI : 1x pemakaian , Ada tambalan di bagian dalam (sebelah kiri)',
         product_image: 'https://res.cloudinary.com/dallchrvc/image/upload/v1656080269/Eiger_S.Tiger_claw_f3jpid.jpg',
         product_available: true,
         category_id: 1,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'The North Face Outdoor Jacket',
         product_price: '275000',
         product_description: ' Size L (56x70), Warna Olive Green, KONDISI : 9/10 Minus pemakaian',
         product_image: 'https://res.cloudinary.com/dallchrvc/image/upload/v1656080269/The_North_Face_Outdoor_Jacket_fdpm8y.jpg',
         product_available: true,
         category_id: 3,
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
         product_image: 'https://res.cloudinary.com/dallchrvc/image/upload/v1656080268/Macbook_Pro_Retina_Non_Touchbar_2017_ig8o9a.webp',
         product_available: true,
         category_id: 4,
         user_id: 1,
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
         product_image: 'https://res.cloudinary.com/dallchrvc/image/upload/v1656080268/Macbook_Air_Early_2015_MJVP2_jotlt8.webp',
         product_available: true,
         category_id: 4,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'Walker Fs 913 L Merk GEA ( Alat Bantu Jalan ) - Merek Gea',
         product_price: '300000',
         product_description: `Walker GEA FS 913 L merupakan alat bantu jalan untuk orang tua , berbentuk jemuran tanpa roda.

         Walker / Alat bantu jalan ini sangat cocok untuk digunakan sebagai alat fisioterapi, ataupun digunakan oleh orang tua karena dapat dijadikan tumpuan tubuh melalui kedua tangan.
         
         selain itu, walker GEA ini dapat diatur ketinggiannya untuk disesuaikan dengan tinggi tubuh penggunanya.
         
         Spesifikasi Produk :
         - Bahan : Stainless
         - ketinggian : 80-89cm ( Dapat diatur/ adjustable dengan 4 bh pin di setiap kaki)`,
         product_image: 'https://res.cloudinary.com/dallchrvc/image/upload/v1657283603/gea_gea-fs913l-walker-alat-bantu-jalan_full02_vclpiy.webp',
         product_available: true,
         category_id: 5,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'BMX Cub Custom Modifikasi Motor seperti sepeda',
         product_price: '9500000',
         product_description: `
         
         BMX Cub modifikasi

         ( Ready )
         
         spesifikasi nya
         - mesin Supra
         - mesin halus
         - Rangka full custom handmade
         - Shock depan Baru
         - segitiga dan komstir
         - cakram depan baru
         - Velg Baru dan ban ukuran ring 17
         - jok empuk dan baru
         - rem belakang pakai handle rem kiri
         - stang BMX
         - Riser BMX
         - Gas spontan
         - Selang rem
         - Master dan kaliper
         - Ban Baru
         - Handgrip baru
         - Lampu depan LED
         - Aki Baru
         
         Mau cek unit bisa datang ke bengkel`,
         product_image: 'https://res.cloudinary.com/dallchrvc/image/upload/v1657283868/460568dc-a26e-4095-9f59-36eeadb76902_inwntr.jpg',
         product_available: true,
         category_id: 2,
         user_id: 1,
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
