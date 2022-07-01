const db = require("../models");
const Users = db.users;

async function profileIsComplete(req, res, next) {
  const user = await Users.findByPk(req.user.id);
  if (
    user.user_regency === null ||
    user.user_province === null ||
    user.user_address === null ||
    user.user_phone === null ||
    user.user_image === null
  ) {
    res.status(401).send("Mohon Lengkapi Profile Anda Terlebih Dahulu");
  } else {
    next();
  }
}

module.exports = profileIsComplete;
