const db = require("../models");
const Orders = db.orders;

async function insert(req, res) {
  const order = {
    order_price: req.fields.order_price,
    order_status: 1,
    product_id: req.fields.product_id,
    user_id: req.fields.user_id,
  };
  const createOrder = await Orders.create(order);
  res.json(createOrder);
}

module.exports = {
  insert,
};
