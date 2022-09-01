const db = require("../models");
const cloudinaryConf = require("../config/cloudinary");
const { orders } = require("../models");
const Orders = db.orders;
// const Notifications = db.notifications;
const Products = db.products;
const Order_Statuses = db.order_statuses;
const Order_Details = db.order_details;
const Users = db.users;
const Banks = db.banks;
const Notification = db.notifications;

async function findAll(req, res) {
  
  const order = await Orders.findAll({
    include: [
      {
        model: Order_Details, 
        include: [{
          model: Products,
          include: [{
            model: Users,
            include: [{
              model: Banks,
            }]
          }]
        }]
      },
      {
        model: Order_Statuses,
      },
    ],
    where: {
      user_id:req.user.id,
    },
    order: [['createdAt', 'DESC']],
  });
  
  let response=[];
  let num_loop = 0;

  order.forEach((data) => {
    
    if(data.Order_Details != []){
    response.push({
        id: data.id,
        createdAt: data.createdAt,
        order_transfer_image: data.order_transfer_image,
        order_delivery_price: data.order_delivery_price,
        order_price: data.order_price,
        total_order_price:0,
        delivery_id: data.delivery_id,
        order_status: data.Order_Status.status_name,
        petani_id: data.Order_Details[0].Product.User.id,
        product_owner_name: data.Order_Details[0].Product.User.user_name,
        product_owner_regency: data.Order_Details[0].Product.User.user_regency,
        product_owner_bank: data.Order_Details[0].Product.User.Bank.bank_name,
        product_owner_rekening: data.Order_Details[0].Product.User.user_rekening,
        product_owner_phone: data.Order_Details[0].Product.User.user_phone,
        product_order:[],
      })
    
    
    ord_detail = data.Order_Details;
    let sum_order = 0;
    ord_detail.forEach((data)=>{
      response[num_loop].product_order.push({
        product_name:data.Product.product_name,
        product_price:data.Product.product_price,
        product_image:data.Product.product_image,
        order_qty:data.order_detail_qty,
      })
      sum_order += data.Product.product_price*data.order_detail_qty 
    })

    response[num_loop].total_order_price = sum_order + data.order_delivery_price
  
    num_loop += 1;
  }
  });
  

  res.send({
    // order: order,
    order : response,
    // order : order[0].Order_Details[0].Product.User.user_name,
  });
}

async function findAllSellerOrder(req, res) {
  
  const order = await Orders.findAll({
    include: [
      {
        model: Order_Details, 
        include: [{
          model: Products
        }]
      },
      {
        model: Order_Statuses,
      },
      {model: Users}
    ],
    order: [['createdAt', 'DESC']],
  });
  
  let response=[];
  let num_loop = 0;

  order.forEach((data) => {
    // const product_owner_id = data.Order_Details[0].Product.user_id;
    if(data.Order_Details != [] && data.Order_Details[0].Product.user_id == req.user.id){
    response.push({
        id: data.id,
        // owner_product_id: data.Order_Details[0].Product.user_id,
        createdAt: data.createdAt,
        order_transfer_image: data.order_transfer_image,
        order_delivery_price: data.order_delivery_price,
        order_price: data.order_price,
        total_order_price:0,
        delivery_id: data.delivery_id,
        order_status: data.Order_Status.status_name,
        pasar_id: data.User.id,
        order_name: data.User.user_name,
        order_regency: data.User.user_regency,
        order_province: data.User.user_province,
        order_address: data.User.user_address,
        order_phone: data.User.user_phone,
        product_order:[],
      })
    
    
    ord_detail = data.Order_Details;
    let sum_order = 0;
    ord_detail.forEach((data)=>{
      response[num_loop].product_order.push({
        product_name:data.Product.product_name,
        product_price:data.Product.product_price,
        product_image:data.Product.product_image,
        order_qty:data.order_detail_qty,
      })
      sum_order += data.Product.product_price*data.order_detail_qty 
    })

    response[num_loop].total_order_price = sum_order + data.order_delivery_price
    
    num_loop += 1;
    }
  })
  // else{
  //   res.send({message:"Order detail not found"})
  //   }
  // });
  

  res.send({
    // order: req.user.id,
    order : response,
    // order : order[0].Order_Details[0].Product.user_id,
  });
}

async function findAllOrderStatuses(req, res) {
  const order_statuses = await Order_Statuses.findAll();
  res.send({
    data: order_statuses,
  });
}

async function findNotif(req, res) {
  const notifications = await Notification.findAll({
    where: {
      user_id:req.user.id,
    },
    order: [['createdAt', 'DESC']],
  });

  res.send({
    notif: notifications,
  });
}

async function updateNotif(req, res) {
  await Notification.update({"mark_as_read":true},{
    where: {
      id: req.params.id
    }
  })

  res.send({
    message:"mark as read true"
  })
}

async function insertOrder(req, res) {
  const order = {
    order_delivery_price: req.fields.order_delivery_price,
    order_price: req.fields.order_price,
    status_id: 1,
    user_id: req.user.id,
    delivery_id: req.fields.delivery_id,
  };

  const createOrder = await Orders.create(order);
  
  const notificationPasar = {
    notification_title: "Yeayy, kamu berhasil memesan produk!!",
    notification_desc: "Petani sedang mengecek pesananmu. Harap di tunggu sampai pesanan diterima.",
    notification_link: "/transaction",
    mark_as_read: false,
    user_id: req.user.id,
  };

  const notificationPetani = {
    notification_title: "Horeee produkmu ada yang pesan :)",
    notification_desc:  "Produkmu ada yang pesan, segera cek barang dan update status pesananmu",
    notification_link: "/transaction",
    mark_as_read: false,
    user_id: req.fields.product_user_id,
  };

  await Notification.create(notificationPasar);
  await Notification.create(notificationPetani);

  res.send({
    message: "Order berhasil",
    id: createOrder.id
  });
}

async function insertOrderDetail(req, res) {

  const order_detail = {
    order_detail_qty: req.fields.order_detail_qty,
    product_id: req.fields.product_id,
    order_id: req.fields.order_id,
  };

  await Order_Details.create(order_detail);

  res.send({
    message: "Order Detail berhasil",
  });
}

async function updateStatus(req, res) {
  // const orders = await Orders.findAll({
  //   include: [
  //     {
  //       model: Order_Details, 
  //       include: [{
  //         model: Products,
  //       }]
  //     },
  //   ],
  //   where: {
  //     id:req.params.id,
  //   },
  //   order: [['createdAt', 'DESC']],
  // })
  
  const checkIfOrderExist = await Orders.findByPk(req.params.id);
  if (checkIfOrderExist) {
    const order = {
      status_id: req.fields.status_id,
    };
    await Orders.update(order, {
      where: {
        id: req.params.id,
      },
    });

    let notificationPasar = {};
    let notificationPetani = {};
    if(order.status_id==2){
      notificationPasar = {
        notification_title:"Pesananmu diterima oleh petani :)",
        notification_desc:"Untuk melanjutkan transaksi, silahkan bayar ke nomer rekening tertera",
        notification_link:"/transaction",
        mark_as_read: false,
        user_id: req.fields.user_id,
      }

      notificationPetani = {
        notification_title:"Kamu telah menerima pesanan :)",
        notification_desc:"Harap menunggu pasar untuk melakukan pembayaran",
        notification_link:"/transaction",
        mark_as_read: false,
        user_id: req.user.id,
      }
    }
    else if(order.status_id==3){
      notificationPasar = {
        notification_title:"Pesananmu dikirim oleh petani :)",
        notification_desc:"Pasananmu sedang dikirim dalam perjalanan, harap menunggu",
        notification_link:"/transaction",
        mark_as_read: false,
        user_id: req.fields.user_id,
      }

      notificationPetani = {
        notification_title:"Kamu telah mengirim pesanan :)",
        notification_desc:"Pastikan produk yang dikirim sudah sesuai pesanan",
        notification_link:"/transaction",
        mark_as_read: false,
        user_id: req.user.id,
      }
    }
    else if(order.status_id==4){
      const user = await Users.findByPk(req.user.id);

      if(user.role_id == 1){
        notificationPasar = {
          notification_title:" Yeayyy pesanan mu selesai :)",
          notification_desc:"Pesananmu telah selesai, ayoo order produk lagi",
          notification_link:"/transaction",
          mark_as_read: false,
          user_id: req.fields.user_id,
        }

        notificationPetani = {
          notification_title:"Hore pesanan mu telah selesai :)",
          notification_desc:"Terimakasi sudah melayani pelanggang dengan baik",
          notification_link:"/transaction",
          mark_as_read: false,
          user_id: req.user.id,
        }
      }else if(user.role_id==2){
        notificationPasar = {
          notification_title:"Yeayyy pesanan mu selesai :)",
          notification_desc:"Pesananmu telah selesai, ayoo order produk lagi",
          notification_link:"/transaction",
          mark_as_read: false,
          user_id: req.user.id,
        }

        notificationPetani = {
          notification_title:"Hore pesanan mu telah selesai :)",
          notification_desc:"Terimakasi sudah melayani pelanggang dengan baik",
          notification_link:"/transaction",
          mark_as_read: false,
          user_id: req.fields.user_id,
        }
      }
    }

    else if(order.status_id==5){
      notificationPasar = {
        notification_title:"Yahh pesananmu di batalkan :(",
        notification_desc:"Pasananmu telah dibatalkan, yuk order lagi",
        notification_link:"/transaction",
        mark_as_read: false,
        user_id: req.user.id,
      }

      notificationPetani = {
        notification_title:"Pesananmu dibatalkan :(",
        notification_desc:"Yuk tingkatkan pelayanan mu agar pasar bisa repeat order",
        notification_link:"/transaction",
        mark_as_read: false,
        user_id: req.fields.user_id,
      }
    }
    
    await Notification.create(notificationPasar);
    await Notification.create(notificationPetani);
    res.send({
      message: `Data order berhasil diupdate ${order.status_id}`,
    });
  } else {
    res.send({
      message: "Order tersebut tidak ada",
    });
  }
}

async function updateDeliveryPrice(req, res) {
  const checkIfOrderExist = await Orders.findByPk(req.params.id);
  if (checkIfOrderExist) {
    const order = {
      order_delivery_price: req.fields.order_delivery_price,
    };
    await Orders.update(order, {
      where: {
        id: req.params.id,
      },
    });
    res.send({"message":"berhasil"})
  }
}

async function updateOrderTransfer(req, res) {
  const orders = await Orders.findAll({
    include: [
      {
        model: Order_Details, 
        include: [{
          model: Products,
        }]
      },
    ],
    where: {
      id:req.params.id,
    },
    order: [['createdAt', 'DESC']],
  })

  if (orders) {
    const uploadFoto = await cloudinaryConf.uploader.upload(
      req.files.order_transfer_image.path, 
      {folder: "rumah-tani/transfer-image"}
    );
    const order = {
      order_transfer_image: uploadFoto.secure_url,
    };

    await Orders.update(order, {
      where: {
        id: req.params.id,
      },
    });
    
    notificationPasar = {
      notification_title:"Yaeyy kamu berhasil upload bukti transaksi :)",
      notification_desc:"Petani akan segara mengirim produk mu",
      notification_link:"/transaction",
      mark_as_read: false,
      user_id: req.user.id,
    }

    notificationPetani = {
      notification_title:"Yeay bukti transaksi berhasil diupload :)",
      notification_desc:"Cek nominal transaksi dan segera kirim pesanan",
      notification_link:"/transaction",
      mark_as_read: false,
      user_id: orders[0].Order_Details[0].Product.user_id,
    }

    
    await Notification.create(notificationPasar);
    await Notification.create(notificationPetani);
    
    res.send({
      message: `Bukti transfer berhasil di upload `,
    });
  } else {
    res.send({
      message: "Order tersebut tidak ada",
    });
  }
}

module.exports = {
  findAll,
  insertOrder,
  insertOrderDetail,
  updateOrderTransfer,
  updateStatus,
  findAllOrderStatuses,
  findAllSellerOrder,
  findNotif,
  updateNotif,
  updateDeliveryPrice,
};
