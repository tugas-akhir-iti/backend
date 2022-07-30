const cloudinaryConf = require("../config/cloudinary");
const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");
const Notifications = db.notifications;
const Orders = db.orders;
const Products = db.products;
const Users = db.users;
const Banks = db.banks;
const Roles = db.roles;
const Sequelize = require("sequelize");

async function get(req, res) {
  const user = await Users.findByPk(req.user.id);
  if (user == null) {
    res.send({
      message: "User tidak ada",
    });
  } else {
    const response = {
      user_id: user.id,
      user_name: user.user_name,
      user_province: user.user_province,
      user_regency: user.user_regency,
      user_address: user.user_address,
      user_phone: user.user_phone,
      bank_id: user.bank_id,
      user_rekening: user.user_rekening,
      user_image: user.user_image,
      role_id: user.role_id,
    };
    res.send({
      data: response,
    });
  }
}

// async function getNotifications(req, res) {
//   const notifications = await Notifications.findAll({
//     include: [{ model: Users }, { model: Products }, { model: Orders }],
//     where: {
//       user_id: req.user.id,
//     },
//   });

//   let response = [];
//   notifications.forEach((data) => {
//     response.push({
//       id: data.id,
//       notification_title: data.notification_title,
//     })
//   });

//   res.send({
//     data: response,
//   });
// }

async function getBanks(req, res) {
  const bank = await Banks.findAll();
  res.send({
    data: bank,
  });
}
async function getRoles(req, res) {
  const role = await Roles.findAll();
  res.send({
    data: role,
  });
}

// async function getTransactionsHistory(req, res) {
//   const checkUser = await Users.findByPk(req.user.id);
//   const getProductsData = await Products.findAll({
//     where: {
//       user_id: req.user.id,
//     },
//   });
//   if (checkUser.role_id == 2) {
//     const transactionHistoryBuyer = await Orders.findAll({
//       include: [{ model: Products }],
//       where: {
//         user_id: req.user.id,
//       },
//     });
//     res.status(200).json({ data: transactionHistoryBuyer });
//   } else if (checkUser.role_id == 1) {
//     const productIds = [];
//     getProductsData.forEach((value) => {
//       productIds.push(value.id);
//     });
//     const transactionHistorySeller = await Orders.findAll({
//       include: [{ model: Products }],
//       where: {
//         product_id: { [Sequelize.Op.in]: productIds },
//       },
//     });
//     res.status(200).json({ data: transactionHistorySeller });
//   }
// }

async function update(req, res) {
  const checkIfUserExist = await Users.findByPk(req.user.id);
  if (checkIfUserExist) {
    const uploadFoto = req.files.user_image
      ? await cloudinaryConf.uploader.upload(req.files.user_image.path, {folder: "rumah-tani/users"})
      : null;
    const user = {
      user_image: req.files.user_image
        ? uploadFoto.secure_url
        : req.fields.user_image,
      user_name: req.fields.user_name,
      user_regency: req.fields.user_regency,
      user_address: req.fields.user_address,
      user_phone: req.fields.user_phone,
      bank_id: req.fields.bank_id,
      user_rekening: req.fields.user_rekening,
      user_province: req.fields.user_province,
    };
    await Users.update(user, {
      where: {
        id: req.user.id,
      },
    });
    res.send({
      message: "Data user berhasil di update",
    });
  } else {
    res.send({
      message: "User tidak ada",
    });
  }
}

async function create(req, res) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(req.fields.user_password, salt);
  req.fields.user_password = hash;

  const user = {
    user_name: req.fields.user_name,
    user_email: req.fields.user_email,
    role_id: req.fields.role_id,
    user_password: req.fields.user_password,
  };

  const insertUser = await Users.create(user);
  const response = {
    id: insertUser.id,
    user_name: insertUser.user_name,
    user_email: insertUser.user_email,
    role_id: insertUser.role_id,
  };
  res.json(response);
}

async function login(req, res) {
  const isUserExist = await Users.findOne({
    where: {
      user_email: req.fields.user_email,
    },
  });
  if (isUserExist) {
    // compare hash bcrypt
    const isPasswordTrue = bcrypt.compareSync(
      req.fields.user_password,
      isUserExist.user_password
    );
    if (isPasswordTrue) {
      //generate token
      const token = jwt.sign(
        {
          id: isUserExist.id,
          user_name: isUserExist.user_name,
          user_email: isUserExist.user_email,
          role_id: isUserExist.role_id,
        },
        process.env.TOKEN_SECRET
      );
      res.json({
        status: 200,
        token,
      });
      return;
    }

    res.json({
      status: 400,
      message: "password is wrong",
    });
    return;
  }

  // return user not found
  res.json({
    status: 400,
    message: "user not found",
  });
  return;
}

module.exports = {
  create,
  login,
  get,
  // getNotifications,
  // getTransactionsHistory,
  update,
  getBanks,
  getRoles
};
