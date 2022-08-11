const db = require("../models");
const cloudinaryConf = require("../config/cloudinary");
const Orders = db.orders;
// const Notifications = db.notifications;
const Products = db.products;
const Order_Statuses = db.order_statuses;
const Order_Details = db.order_details;
const Users = db.users;
const Banks = db.banks;

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
        order_price: data.order_price,
        order_status: data.Order_Status.status_name,
        product_owner_name: data.Order_Details[0].Product.User.user_name,
        product_owner_regency: data.Order_Details[0].Product.User.user_regency,
        product_owner_bank: data.Order_Details[0].Product.User.Bank.bank_name,
        product_owner_rekening: data.Order_Details[0].Product.User.user_rekening,
        product_owner_phone: data.Order_Details[0].Product.User.user_phone,
        product_order:[],
      })
    
    
    ord_detail = data.Order_Details;
    ord_detail.forEach((data)=>{
      response[num_loop].product_order.push({
        product_name:data.Product.product_name,
        product_price:data.Product.product_price,
        product_image:data.Product.product_image,
        order_qty:data.order_detail_qty,
      })
    })
    
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
        order_price: data.order_price,
        order_status: data.Order_Status.status_name,
        order_name: data.User.user_name,
        order_regency: data.User.user_regency,
        order_province: data.User.user_province,
        order_address: data.User.user_address,
        order_phone: data.User.user_phone,
        product_order:[],
      })
    
    
    ord_detail = data.Order_Details;
    ord_detail.forEach((data)=>{
      response[num_loop].product_order.push({
        product_name:data.Product.product_name,
        product_price:data.Product.product_price,
        product_image:data.Product.product_image,
        order_qty:data.order_detail_qty,
      })
    })
    
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

async function insertOrder(req, res) {
  const order = {
    status_id: 1,
    user_id: req.user.id,
    order_price: req.fields.order_price,
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
  findAllSellerOrder
};
