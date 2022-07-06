const db = require("../models");
const Notifications = db.notifications;

async function get(req, res) {
  const notifications = await Notifications.findAll({
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
