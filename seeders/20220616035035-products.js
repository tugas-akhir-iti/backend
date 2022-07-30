'use strict';

module.exports = {
   async up (queryInterface, Sequelize) {

   return queryInterface.bulkInsert('Products', [
      {
         product_name: 'Kubis Hijau',
         product_price: '10000',
         product_stock: '11000',
         product_min_order: '100',
         product_description: `Spesifikasi :
         Tanaman kubis bunga termasuk dalam golongan tanaman sayuran semusim atau berumur pendek. Tanaman tersebut hanya dapat berproduksi satu kali dan setelah itu mati. Pemanen kubis bunga dapat dilakukan pada umur 40-50 hari setelah pindah tanam,tergantung pada varietasnya.
         
         Keunggulan :
         -sayuran fresh 
         -dikemas rapih
         
         Sirkulasi proses panen kubis :
         Umur panen kubis yang baik umumnya berkisar 81 sampai 105 hari. Kupis dipotong menggunakan pisau tajam dari pangkalnya. Jauhi kubis yang telah dipanen dari cahaya matahari langsung. 
         
         Manfaat kubis :
         -Meningkatkan kekebalan tubuh
         -Baik untuk organ pencernaan
         -Sebagai nutrisi bagi kesehatan mata
         -Membantu menurunkan berat badan
         -Sebagai nutrisi otak         
         `,
         product_image: 'https://res.cloudinary.com/drxsjybd2/image/upload/v1659011965/rumah-tani/products/s1_dxfraw.jpg',
         product_available: true,
         category_id: 1,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'Cabai Rawit Hijau',
         product_price: '70000',
         product_stock: '1000',
         product_min_order: '50',
         product_description: `Spesifikasi :
         Panjang buah 5-8 cm.
         Diameter 1,0 - 1,6 cm. 
         Rasa buah pedas dan menghadap kebawah.
         Dapat dipanen mulai umur 82 hari setelah tanam.
         
         Keunggulan :
         -cabe fresh dan bersih
         -dikemas rapih harga bersahabat
         
         Sirkulasi proses cabe rawit :
         Panen dilakukan sesuai konsumen pasar. Cabai rawit dapat dipanen hijau, kekuningan atau merah. Kwalitas  cabai yang balik bila dipanen apabila sudah terjadi perubahan warna  kuning atau kemerahan. umumnya cabai mulai dipanen pada umur 75-80 hari setelah tanam.
         
         Manfaat cabe rawit : 
         -Bahan campuran masakan 
         -Sebagai obat untuk menyembuhkan luka
         -Dapar mengobati sariawan
         -Meredakan demam tinggi
         -Mengatasi hidung mampet
         `,
         product_image: 'https://res.cloudinary.com/drxsjybd2/image/upload/v1659011959/rumah-tani/products/s2_x8i5oo.jpg',
         product_available: true,
         category_id: 1,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'Jagung Manis',
         product_price: '8000',
         product_stock: '1000',
         product_min_order: '50',
         product_description: `Spesifikasi :
         Memiliki kandungan gula (terutama sukrosa) yang tinggi pada waktu dipanen. Pemanenan untuk produksi selalu dilakukan pada saat muda (tahap "masak susu", kira-kira 18-22 hari setelah penyerbukan terjadi).
         
         Keunggulan :
         -jagung fresh dan bersih
         -dijamin manis harga berteman
         -dikemas rapih
         
         Sirkumalasi proses jagung manis :
         Panen utama jagung manis dapat dlakukan kala jagung berusia 65 – 75 hari.
         
         Manfaat jagung manis :
         -Meningkatkan kesehatan penglihatan
         -Meningkatkan daya ingat
         -Mencegah masalah jantung
         -Mencegah kanker paru-paru
         -Mengatasi anemia         
         `,
         product_image: 'https://res.cloudinary.com/drxsjybd2/image/upload/v1659011962/rumah-tani/products/s3_by1zsg.jpg',
         product_available: true,
         category_id: 1,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'Tomat Merah',
         product_price: '12000',
         product_stock: '2500',
         product_min_order: '100',
         product_description: `Spesifikasi tomat :
         mempunyai bentuk yang bervariasi, tergantung dari jenis dan varietasnya. Terdapat buah tomat (Solanum lycopersicum L.) yang memiliki bentuk bulat, bulat telur atau oval, agak bulat, agak lonjong, serta bulat persegi. Ukuran  dari buah tomat (Solanum lycopersicum L.) juga cukup bervariasi, ada yang berukuran paling kecil yakni memiliki berat 8 gram serta yang berukuran agak besar yang memiliki berat hingga 180 gram.
         
         Keunggulan :
         -tomat fresh dan bersih
         -harga berteman
         -dikemas rapih
         
         Sirkulasi proses tomat :
         Tomat biasanya dapat dipanen setelah 2—3 bulan masa tanam, tomat dapat dipanen apabila kulitnya sudah berwarna kemerahan. Daging buah tomat juga sudah cukup besar.
         
         Manfaat tomat :
         -Menjaga kesehatan jantung
         -Mencegah kanker
         -Mengatasi diabetes
         -Melancarkan pencernaan
         -Menjaga kesehatan mata
         -Menjaga kesehatan kulit
         `,
         product_image: 'https://res.cloudinary.com/drxsjybd2/image/upload/v1659011958/rumah-tani/products/s4_nkbswo.jpg',
         product_available: true,
         category_id: 1,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'Wortel',
         product_price: '18000',
         product_stock: '1000',
         product_min_order: '50',
         product_description: `Spesifikasi :
         Umbi Wortel, yang lebih sering dikenal sebagai sayuran Wortel ini terbentuk dari akar tunggang yang telah berubah fungsi. Ukuran umbi ini bervariasi, umumnya berdiameter 3,5 cm – 6,5 cm dengan berat kisaran 100 gram – 300 gram. 
         
         Keunggulan :
         -wortel fresh dan bersih
         -harga bersahabat
         -dikemas rapih
         
         Sirkulasi proses wortel :
         Wortel biasanya siap dipanen 50 hingga 60 hari dari tanggal tanam. Wortel dewasa membutuhkan beberapa minggu lagi dan biasanya siap dalam waktu sekitar 75 hari. Kebanyakan wortel siap dipanen ketika bahu berdiameter 1/2 hingga 3/4 inci. 
         
         Manfaat wortel :
         -Menjaga kesehatan mata
         -Mencegah penuaan dini
         -Mencegah stroke
         -Menjaga kesehatan kulit
         -Menjaga dan meningkatkan kesuburan kandungan         
         `,
         product_image: 'https://res.cloudinary.com/drxsjybd2/image/upload/v1659011963/rumah-tani/products/s5_qxzdxk.jpg',
         product_available: true,
         category_id: 1,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'Cabai Keriting Merah',
         product_price: '60000',
         product_stock: '1100',
         product_min_order: '200',
         product_description: `Spesifikasi :
         memiliki warna yang sangat lah mencolok yaitu bewarna merah dan juga bewrna hijau mudah dan hijau mudah . Sedangkan biji di lakukan pada saat cabe sudah tua dan di lakuka pemetikan lalu di keringkan dan di lakukan persemaian.
         
         Keunggulan :
         -cabe fresh dan bersih
         -dikemas rapih harga bersahabat
         
         Sirkulasi proses cabe merah :
         tanaman cabai pada dataran rendah ternyata dapat dipanen saat memasuki umut 70 – 75 hari setelah di tanam, sedangkan jika berada didataran tinggi biasanya akan semakin lambat sekitar umur 4 – 5 bulan setelah tanam. Selain itu pemananenan dapat dilakukan 3 – 4 hari sekali atau paling lama selama 1 minggu, dan dapat dipanen saat buahnya berwarna merah.
         
         Manfaat cabe merah : 
         -Sebagai antioksidan
         -sebagai penawar rasa sakit alami
         -Merangsang otak 
         -Sebagai antibiotik infeksi pada luka         
         `,
         product_image: 'https://res.cloudinary.com/drxsjybd2/image/upload/v1659011962/rumah-tani/products/s6_jrhhwr.jpg',
         product_available: true,
         category_id: 1,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'Stroberi',
         product_price: '35000',
         product_stock: '500',
         product_min_order: '20',
         product_description: `Spesifikasi :
         merupakan tanaman subtropis yang bisa menyesuaikan diri dengan baik di dataran tinggi yang mempunyai temparatur sekitar 17-20 derajat serta curah hujan yang baik. mempunyai buah semu, mempunyai bentuk yang unik yaitu oval serta lonjong. Mempunyai warna merah jika sudah tua ataupun matang, mempunyai warna hijau jika masih muda. Mempunyai Pori  berwarna kehitaman ataupun kecoklatan mudah. Buah ini mempunyai rasa yang sangat manis serta juga ada yang kecut ataupun asam.
         
         Keunggulan :
         -Buah fresh dan ukuran lebih besar
         -Rasa manis 
         -haraga bersahabat dan dikemas rapih
         
         Sirkulasi proses strawberry :
         Proses pemanenan dicoba sehabis strawberry berusia 4 bulan. Dengan memotong bagian atas buah, buah yang dipetik dipilih dan disortir sesuai ukuran. 
         
         Manfaat strawberry :
         -Menyehatakan saluran pencernaan
         -Menurunkan kadar kolestrol
         -Menjaga tekanan darah tetap stabil
         -Mengontrol kadar gula darah
         -Mencegah penyakit jantung
         -Menangkal efek radikal bebas
         -Menurunkan berat badan         
         `,
         product_image: 'https://res.cloudinary.com/drxsjybd2/image/upload/v1659011957/rumah-tani/products/b1_tuvpjn.jpg',
         product_available: true,
         category_id: 2,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'Semangka',
         product_price: '20000',
         product_stock: '5000',
         product_min_order: '100',
         product_description: `Spesifikasi :
         memiliki bentuk yang cukup besar dengan bentuk bulat atau lonjong dan diameter hingga 20 cm. kulit buah semangka menyelimuti daging buah berdaging dan tebal permukaan luarnya terkesan licin dan daging kulit yang memiliki warna putih disebut sebagai albedo, cukup untuk melindungi buah yang ada di dalam buah. 
         
         Keunggulan :
         -buah fresh dan rasa manis
         -ukuran lebih besar
         
         Sirkulasi proses semangka :
         memotong tangkai buah menggunakan pisau atau alat pemotong lainnya, pastikan pisau atau alat pemotong lainnya dalam kondisi tajam. Biarkan batang sekitar 3 hingga 5 cm dari pangkal buah.pilih buah yang cukup berat
         dan daun semangka yang sudah mulai layu. Semangka akan terdengar berat saat diketuk menggunakan telapak tangan.
         
         Manfaat semangka :
         -Meningkatkan kesehatan rambut dan kulit
         -Membantu mengendalikan gula darah
         -Mengatasi nyeri otot
         `,
         product_image: 'https://res.cloudinary.com/drxsjybd2/image/upload/v1659011952/rumah-tani/products/b2_vsym3e.jpg',
         product_available: true,
         category_id: 2,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'Anggur Merah',
         product_price: '45000',
         product_stock: '1100',
         product_min_order: '100',
         product_description: `Spesifikasi buah anggur :
         Buah anggur berbentuk bulat seperti bola dengan diameter sekitar 2 – 4 cm. Buah anggur mempunyai warna beragam tergantung dari varietasnya seperti ungu, hijau, merah atau bahkan dalam satu pohon terdapat anggur dengan warna yang berbeda. Di dalam buah terdapat biji yang berukuran 1 -4 mm yang berjumlah 2 – 4 biji. Buah anggur memiliki tekstur yang lunak dengan warna putih, di bagian dalamnya terdaat banyak serat. Jika buah telah matang, buah akan berasa manis dan segar.
         
         Keunggulan :
         -buah manis dan fresh
         -harga bersahabat
         
         Sirkulasi proses anggur merah :
         Anggur dipetik dan disortir dari buah yang rusak dan disimpan didalam ruangan yang dingin sehingga tetap segar. 
         
         Manfaat anggur :
         -Mengatasi peradangan
         -Menurunkan reaksi alergi
         -Mengatasi gangguan tidur
         -Melancarkan aliran darah
         -Buah penambah darah
         -Menjaga kesehatan kulit
         `,
         product_image: 'https://res.cloudinary.com/drxsjybd2/image/upload/v1659011953/rumah-tani/products/b3_i60xwq.jpg',
         product_available: true,
         category_id: 2,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'Apel Merah',
         product_price: '27000',
         product_stock: '10000',
         product_min_order: '500',
         product_description: `Spesifikasi buah apel :
         Daging buah apel berwarna putih dengan serat halus di bagian dalamnya, teksturnya renyah dan rasanya manis jika buah sudah masak. Buah biasanya akan tumbuh 4 – 5 bulan setelah penyerbukan.
         
         Keunggulan :
         Buah segar dan manis 
         
         Sirkulasi proses apel :
         panen apel dilakukan secara bersama-sama atau serempak untuk setiap kebun. pohon apel mulai dapat dipanen sebanyak enam bulan sekali. Setiap pohon apel dapat menghasilkan buah lebih banyak atau sekitar 5 hingga 15 kg buah apel.
         
         Manfaat apel :
         Mencegah penyakit alzheimer
         Obat kesehatan gigi
         Obat diet alami
         menjaga kesehatan mata dan mencegah penyakit katarak
         Memperkuat sistem kekebalan tubuh
         `,
         product_image: 'https://res.cloudinary.com/drxsjybd2/image/upload/v1659011952/rumah-tani/products/b4_m7p5fc.jpg',
         product_available: true,
         category_id: 2,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'Anggur Hijau',
         product_price: '75000',
         product_stock: '550',
         product_min_order: '50',
         product_description: `Spesifikasi :
         Buah anggur berbentuk bulat seperti bola dengan diameter sekitar 2 – 4 cm. Buah anggur mempunyai warna beragam tergantung dari varietasnya seperti ungu, hijau, merah atau bahkan dalam satu pohon terdapat anggur dengan warna yang berbeda. Di dalam buah terdapat biji yang berukuran 1 -4 mm yang berjumlah 2 – 4 biji.
         
         Keunggulan :
         -buah manis dan fresh
         -harga bersahabat
         
         Sirkulasi proses anggur hijau :
         Anggur dipetik dan disortir dari buah yang rusak dan disimpan didalam ruangan yang dingin sehingga tetap segar.
         
         Manfaat anggur hijau :
         -Membantu menurunkan tekanan darah
         -Meningkatkan kesehatan tulang dan otot
         -Menurunkan stress
         -Meningkatkan kesehatan hati (liver)
         `,
         product_image: 'https://res.cloudinary.com/drxsjybd2/image/upload/v1659011956/rumah-tani/products/b5_xbwpp4.jpg',
         product_available: true,
         category_id: 2,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'Mangga Harum Manis',
         product_price: '20000',
         product_stock: '1000',
         product_min_order: '50',
         product_description: `Spesifikasi : 
         jenis harum manis  ini memiliki keunggulan rasa buah yang manis, daging mangganya tebal dan biji agak kecil. Selain memiliki rasa yang manis dan aroma yang harum, ternyata di dalam buahnya terkandung sumber beta-karoten, vitamin C dan kalium.
         
         Keunggulan :
         -Buah fresh manis dan daging tebal
         -dikemas rapih 
         -harga terjangkau
         
         Sirkulasi proses mangga manis :
         tanaman buah mangga harum manis dapat dipanen pada saat usia 4-5 bulan setelah bunga mekar. Biasanya tanaman buah mangga harum manis mekar pada bulan-bulan Juli – Agustus, dan buah akan matang serta siap panen pada bulan September – Oktober. distribusi berdasarkan kualifikasi berat buah, serta tingkat kematangannya, lalu simpan di tempat yang kering juga sejuk.
         
         Manfaat mangga harum manis :
         Meningkatkan sistem kekebalan tubuh
         membantu menurunkan berat badan
         mendukung kesehatan mata dan menjaga penglihatan.
         mengurangi risiko kanker
         `,
         product_image: 'https://res.cloudinary.com/drxsjybd2/image/upload/v1659011954/rumah-tani/products/b6_dszf9r.jpg',
         product_available: true,
         category_id: 2,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'Jahe Emprit Sudah Bersih',
         product_price: '20000',
         product_stock: '1000',
         product_min_order: '10',
         product_description: `Hallo sahabat Rempah:)
         Izinkan kami memperkenalkan produk kami yaitu jahe Emprit sudah bersih JAMIN tidak ada tanah.
         
         Spesifikasi : 
         - Umur panen tua ( min. 11 bulan panen )
         - Ukuran rimpang kecil
         
         Keunggulan : 
         - Dijamin bersih tidak ada tanah
         - Dijamin fresh ( metode khusus )
         - Rasa lebih pedas
         
         Sirkumulasi proses jahe emprit : penyortiran ukuran jahe emprit kecil pakai dan tidak layak pakai, pencucian, penjemuran ( tidak sampai kering ), dan proses metode khusus membuat jahe emprit tetap segar .
         
         
         Manfaat Jahe Emprit :
         1. Mengobati diabetes
         2. Mengurangi berat badan
         3. Mengobati mual
         4. Mengobati asma dan gangguan pernafasan
         5. Mencegah tumor dan kanker
         6. Mencegah penuaan dini
         7. Menyehatkan sistem pencernaan
         8.dll
         `,
         product_image: 'https://res.cloudinary.com/drxsjybd2/image/upload/v1659011963/rumah-tani/products/r1_re8o8e.jpg',
         product_available: true,
         category_id: 3,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'Kapulaga',
         product_price: '40000',
         product_stock: '200',
         product_min_order: '10',
         product_description: `Hallo sahabat Rempah:)
         Izinkan kami memperkenalkan produk kami yaitu Kapulaga hijau kering asli Lokal
         
         Spesifikasi
         Buahnya berbentuk bulat 
         memiliki jumlah biji 14-16 buah
         terdapat 3 ruang di dalam buahnya
         
         Keunggulan : 
         - Dijamin bersih 
         - Dijamin fresh 
         - Rasa local
         
         Sirkumulasi proses kapulaga : Tanaman kapulaga baru bisa dipanen setelah berumur 3 tahun. Proses pemanenan dapat dilakuakan setiap saat. Tanaman kapulaga dapat produktif hingga berumur 10-15 tahun.
         Ciri-ciri kapulaga yang bisa dipanen yaitu:
         Warna buah sudah merah keunguan
         Kulit buah sedikit berkerut atau sudah keriput
         Buah sudah mulai mengeras
         
         Manfaat Kapulaga : 
         -Kaya akan kalsium
         -Meredakan sakit dan nyeri otot
         -Mencegah kanker           
         `,
         product_image: 'https://res.cloudinary.com/drxsjybd2/image/upload/v1659011957/rumah-tani/products/r2_ehjc0m.jpg',
         product_available: true,
         category_id: 3,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'Cengkeh Kering',
         product_price: '55000',
         product_stock: '150',
         product_min_order: '10',
         product_description: `Hallo sahabat Rempah:)
         Izinkan kami memperkenalkan produk kami yaitu Cengkeh kering sudah terkemas rapih
         
         Spesifikasi :
         Kelopak berbentuk corong, pangkal berlekatan, mahkota berbentuk bintang dengan panjang 4-5 mm,
         Buah buni dengan panjang 2-2,5 cm dan berwarna merah sampai merah kehitaman. 
         Biji berwarna coklat berukuran diameter ± 4 mm
         
         Keunggulan :
         Keunggulan : 
         - Dijamin bersih 
         - Dijamin kering mutu terjamin
         - Rasa local
         -dikemas rapih
         
         Sirkumulasi proses cengkeh : 
         Bunga cengkeh yang masih berkuncup dan cengkeh yang sudah berbunga dipisakan, cengkeh akan diperamkan selama 24 jam. Pemeranam ini bertujuan agar dapat mempersingkat waktu penjemuran serta dapat menambah warna cengkeh lebih cokelat mengkilap.
         Pengeringan dengan menggunakan sinar matahari membutuhkan waktu selama 5-6 hari tergantung pada cuaca.
         
         Manfaat Cengkeh :
         -Mengandung kalium,magnesium, vitamin A dan C
         -Menghambat pertumbuhan bakteri
         -Menyehatkan sistem pencernaan
         -Mengatasi sakit gigi
         -Meredakan nyeri
         -Menjaga kesehatan tulang
         -Menjaga daya tahan tubuh
         -Mengurangi asam lambung
         -Melindungi fungsi hati
         -Mencegah kanker
         -Meredakan batuk dan sakit tenggorokan
         -Meringankan sakit kepala
         -Menstabilkan gula darah
         `,
         product_image: 'https://res.cloudinary.com/drxsjybd2/image/upload/v1659011956/rumah-tani/products/r3_yngvtd.jpg',
         product_available: true,
         category_id: 3,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'Kayu Manis',
         product_price: '17000',
         product_stock: '250',
         product_min_order: '10',
         product_description: `Hallo sahabat Rempah:)
         Izinkan kami memperkenalkan produk kami yaitu Kayu Manis sudah bersih dan terkemas rapih
         
         Spesifikasi :
         masuk dalam jenis tanaman rempah-rempah. Pohon kayu manis bisa mencapai ketinggian sekitar 500 sampai dengan 1500 meter. Selain itu tanaman ini juga mempunyai kandungan yang cukup banyak seperti minyak atsiri, karbohidrat dan alcohol. Pohon kayu manis memiliki ketinggian 5 sampai dengan 15 meter dengan warna kulitnya yaiti abu-abu, batang bertekstur sangat padat, berat, dan strukturnya sangat halus.
         
         Keunggulan : 
         -hasil produk local Indonesia
         -rasa terjamin 
         -dikemas rapih dan bersih
         
         Sirkumalasi proses kayu manis :
         dipanen setelah umur 4 tahun, Pemanenan dilakukan dengan cara mengupas kulit batang, lalu kemudian menebangnya. Tahap selanjutnya mengupas kulit cabang dan ranting, selanjutnya kulit batang yang baru dikelupas diperam selama semalaman dengan cara menumpuk kulit pada tempat yang terlindung dari cahaya matahari langsung. Untuk mendapatkan mutu kayu manis yang baik, kulit yang berukuran lebar, yaitu kulit dari batang dan kulit dari dahan yang cukup besar sebaiknya dikikis bagian luarnya, sehingga kulit menjadi bersih, tahap pengeringan yaitu menggunakan sinar matahari selama kurang lebih 3~4 hari hingga kadar air turun sampai 16%, atau berat bahan-bahan susut sampai 50%.
         
         Manfaat kayu manis : 
         Meringankan berbagai gejala menstruasi
         Melawan bakteri dan jamur
         Menjaga kesehatan jantung
         Menjaga kesehatan otak
         Menurunkan gula darah
         Mampu menurunkan berat badan         
         `,
         product_image: 'https://res.cloudinary.com/drxsjybd2/image/upload/v1659011953/rumah-tani/products/r4_knucpe.jpg',
         product_available: true,
         category_id: 3,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'Serai Hijau',
         product_price: '12000',
         product_stock: '50',
         product_min_order: '10',
         product_description: `Hallo sahabat Rempah:)
         Izinkan kami memperkenalkan produk kami yaitu serai
         
         Spesifikasi :
         serai memiliki akar jenis serabut, batang tanaman ini tekstunya berongga dan lunak, batangnya juga berumbi dan bergerombol, daun serai berbentuk hampir seperti pita, runcing, panjang, serta bertekstur kesat, bunga serai cenderung menyerupai bulir-bulir.
         
         Keunggulan :
         - Dijamin bersih tidak ada tanah
         - Dijamin fresh ( metode khusus )
         -dikemas rapih
         -serai berkualitas dengan harga bersahabat
         
         Sirkumulasi proses serai :
         Daun serai yang sudah tumbuh baik dapat dipanen dengan cara dicabut sampai akarnya dan dibersihkan serta dicuci dari tanah yang masih menempel dibagian tanaman serai dan digunakan sesuai keinginan, Setelah panen dapat disimpan di kulkas selama 2 minggu dengan dibungkus terlebih dahulu. 
         
         Manfaat serai : 
         -Menangkal penyakit
         -Sebagai aromaterapi pengusir nyamuk
         -Mencegah kolestrol
         -Mengobati insomnia
         -Memberikan efek menenangkan                 
         `,
         product_image: 'https://res.cloudinary.com/drxsjybd2/image/upload/v1659011951/rumah-tani/products/r5_jblg5m.jpg',
         product_available: true,
         category_id: 3,
         user_id: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         product_name: 'Kunyit',
         product_price: '12000',
         product_stock: '50',
         product_min_order:'10',
         product_description: `Spesifikasi :
         akar kunyit yakni bentuk rimpangnya bulat dan panjang dengan diameter 1-2 cm serta panjang 3-6 cm. dari ruas-ruasnya dapat tumbuh tunas baru yang akan berkembang menjadi tanaman baru.
         
         Keunggulan :
         -bersih tanpa tanah
         -kunyit segar
         -dikemas rapih
         
         Sirkumulasi proses kunyit :
         Kunyit yang siap panen, umumnya dilakukan dimusim kemarau untuk dilakukan pengeringan dan dibersihkan terlebih dahulu dari tanah yang menempel. 
         
         Manfaat kunyit :
         -Mengobati luka ringan
         -Melancarkan pencernaan
         -Mengempiskan jerawat
         -Mencegah penyakit jantung
         -Meringankan gangguan menstruasi
         -Mencegah kanker
         -Mengatasi masalah kulit                          
         `,
         product_image: 'https://res.cloudinary.com/drxsjybd2/image/upload/v1659011957/rumah-tani/products/r6_kfgfjs.jpg',
         product_available: true,
         category_id: 3,
         user_id: 1,
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
