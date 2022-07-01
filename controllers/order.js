const db = require("../models");
const Orders = db.orders;

async function insert(req, res) {
  const order = {
    order_price: req.fields.order_price,
    order_status: 1,
    product_id: req.fields.product_id,
    user_id: req.user.id,
  };
  const createOrder = await Orders.create(order);
  res.json(createOrder);
}

async function update(req, res) {
  const checkIfOrderExist = await Orders.findByPk(req.params.id);
  if (checkIfOrderExist) {
    const order = {
      order_status: req.fields.order_status,
    };
    await Orders.update(order, {
      where: { id: req.params.id },
    });
    res.send({ message: "Data order berhasil diupdate" });
  } else {
    res.send({ message: "Order tersebut tidak ada" });
  }
}

module.exports = {
  insert,
  update,
};
