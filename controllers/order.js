const db = require("../models");
const cloudinaryConf = require("../config/cloudinary");
const Orders = db.orders;
const Notifications = db.notifications;
const Products = db.products;
const Order_Statuses = db.order_statuses;
const Order_Details = db.order_details;
const Users = db.users;
const Banks = db.banks;

async function findAll(req, res) {
  const products = await Orders.findAll({
    include: [
      {
        model: Order_Details,
      },
      {
        model: Order_Statuses,
      },
    ],
    where: {
      user_id:req.user.id,
    }
  });

  //get user_product_id
  const product_id = await Products.findByPk(products[0].Order_Details[0].product_id);
  //get product name
  const product_owner = await Users.findByPk(product_id.user_id,{
    include: [
      {model: Banks}
    ]
  });

  const res_user_product = {
    product_owner_name: product_owner.user_name,
    product_owner_regency: product_owner.user_regency,
    product_owner_rekening: product_owner.user_rekening,
    product_owner_phone: product_owner.user_phone,
    product_owner_bank: product_owner.Bank.bank_name,
  }

  res.send({
    product_owner: res_user_product,
    order : products,
  });
}

async function findAllOrderStatuses(req, res) {
  const order_statuses = await Order_Statuses.findAll();
  res.send({
    data: order_statuses,
  });
}

async function insertOrder(req, res) {
  const order = {
    status_id: 1,
    user_id: req.user.id,
  };

  const createOrder = await Orders.create(order);

  // const getUserId = await Products.findOne({
  //   where: {
  //     id: req.fields.product_id,
  //   },
  // });
  
  // const notification = {
  //   notification_title: "Order produk!!! petani sedang mengecek stok barang. Harap di tunggu sampai pesanan diterima.",
  //   user_id: getUserId.user_id,
  //   product_id: req.fields.product_id,
  //   order_id: createOrder.id,
  //   mark_as_read: false,
  // };

  // await Notifications.create(notification);

  res.send({
    message: "Order berhasil",
  });
}

async function insertOrderDetail(req, res) {

  const order_detail = {
    order_detail_qty: req.fields.order_detail_qty,
    order_detail_price: req.fields.order_detail_price,
    product_id: req.fields.product_id,
    order_id: req.fields.order_id,
  };

  await Order_Details.create(order_detail);

  res.send({
    message: "Order Detail berhasil",
  });
}

async function updateStatus(req, res) {
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

    // let notification_title="";
    // if(order.status_id==2){
    //   notification_title="Order diterima, silahkan bayar ke nomer rekening tertera";
    // }
    // else if(order.status_id==3){
    //   notification_title="Order dikirim, harap menunggu";
    // }
    // else if(order.status_id==4){
    //   notification_title="Order selesai, terimakasih sudah berbelanja";
    // }
    // else if(order.status_id==5){
    //   notification_title="Order dibatalakan";
    // }

    // const notification = {
    //   notification_title: notification_title,
    //   user_id: checkIfOrderExist.user_id,
    //   product_id: checkIfOrderExist.product_id,
    //   order_id: checkIfOrderExist.id,
    //   mark_as_read: false,
    // };
    // await Notifications.create(notification);
    res.send({
      message: `Data order berhasil diupdate ${order.status_id}`,
    });
  } else {
    res.send({
      message: "Order tersebut tidak ada",
    });
  }
}

async function updateOrderTransfer(req, res) {
  const checkIfOrderExist = await Orders.findByPk(req.params.id);
  if (checkIfOrderExist) {
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
    
    // let notification_title="";
    // if(order.status_id==2){
    //   notification_title="Order diterima, silahkan bayar ke nomer rekening tertera";
    // }
    // else if(order.status_id==3){
    //   notification_title="Order dikirim, harap menunggu";
    // }
    // else if(order.status_id==4){
    //   notification_title="Order selesai, terimakasih sudah berbelanja";
    // }
    // else if(order.status_id==5){
    //   notification_title="Order dibatalakan";
    // }

    // const notification = {
    //   notification_title: notification_title,
    //   user_id: checkIfOrderExist.user_id,
    //   product_id: checkIfOrderExist.product_id,
    //   order_id: checkIfOrderExist.id,
    //   mark_as_read: false,
    // };
    // await Notifications.create(notification);
    
    res.send({
      message: `Bukti transfer berhasil di upload`,
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
};
