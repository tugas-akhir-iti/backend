const db = require("../models");
const Orders = db.orders;
const Notifications = db.notifications;
const Products = db.products;

function insert(req, res) {
  const order = {
    order_price: req.fields.order_price,
    order_status: 1,
    product_id: req.fields.product_id,
    user_id: req.user.id,
  };
  const createOrder = Orders.create(order);
  // res.json(createOrder);

  //SELECT user_id FROM Products WHERE produtct_id = req.field.product_id;
  const getProductId = Products.findOne({
    attributes: ['user_id'],
    where: {
      id: req.fields.product_id
    }
  })
  const notification = {
    notification_title: "Product Penawaran",
    user_id: getProductId,
    product_id: req.fields.product_id,
    order_id: createOrder.InsertId
  };

  const createNotification = Notifications.create(notification);
}

async function update(req, res) {
  const checkIfOrderExist = await Orders.findByPk(req.params.id);
  if (checkIfOrderExist) {
    const order = {
      order_status: req.fields.order_status,
    };
    await Orders.update(order, {
      where: {
        id: req.params.id
      },
    });
    res.send({
      message: "Data order berhasil diupdate"
    });
  } else {
    res.send({
      message: "Order tersebut tidak ada"
    });
  }
}

module.exports = {
  insert,
  update,
};