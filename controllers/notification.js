const db = require("../models");

const Users = db.users;


async function get(req, res) {
  const notifications = await Notifications.findAll({
    include: [{ model: Users }, { model: Products }, { model: Orders }],
    where: {
      user_id: req.user.id,
    },
  });
  res.send({
    data: notifications,
  });
}

module.exports = {
  get,
};
