const db = require("../models");
const Orders = db.orders;
const Notifications = db.notifications;
const Products = db.products;

async function insert(req, res) {
  const order = {
    order_price: req.fields.order_price,
    order_status: 0,
    product_id: req.fields.product_id,
    user_id: req.user.id,
  };
  const createOrder = await Orders.create(order);

  const getUserId = await Products.findOne({
    where: {
      id: req.fields.product_id,
    },
  });
  const notification = {
    notification_title: "Product Penawaran",
    user_id: getUserId.user_id,
    product_id: req.fields.product_id,
    order_id: createOrder.id,
    mark_as_read: true,
  };

  await Notifications.create(notification);

  res.send({
    message: "Order berhasil",
  });
}

async function update(req, res) {
  const checkIfOrderExist = await Orders.findByPk(req.params.id);
  if (checkIfOrderExist) {
    const order = {
      order_status: req.fields.order_status,
    };
    await Orders.update(order, {
      where: {
        id: req.params.id,
      },
    });
    res.send({
      message: "Data order berhasil diupdate",
    });
  } else {
    res.send({
      message: "Order tersebut tidak ada",
    });
  }
}

module.exports = {
  insert,
  update
};
