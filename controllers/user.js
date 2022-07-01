const cloudinaryConf = require("../config/cloudinary");
const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");
const Users = db.users;

async function get(req, res) {
  const user = await Users.findByPk(req.params.id);
  if (user == null) {
    res.send({
      message: "User tidak ada"
    });
  } else {
    res.send({
      Foto_Profil: user.user_image,
      Nama: user.user_name,
      Provinsi: user.user_province,
      Kota: user.user_regency,
      Alamat: user.user_address,
      No_Handphone: user.user_phone,
    });
  }
}

async function update(req, res) {
  const uploadFoto = await cloudinaryConf.uploader.upload(
    req.files.user_image.path
  );
  const checkIfUserExist = await Users.findByPk(req.params.id);
  if (checkIfUserExist) {
    const user = {
      user_image: uploadFoto.secure_url,
      user_name: req.fields.user_name,
      user_regency: req.fields.user_regency,
      user_address: req.fields.user_address,
      user_phone: req.fields.user_phone,
      user_province: req.fields.user_province
    };
    await Users.update(user, {
      where: {
        id: req.params.id
      },
    });
    res.send({
      message: "Data user berhasil di update"
    })
  } else {
    res.send({
      message: "User tidak ada"
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
    user_role: req.fields.user_role,
    user_password: req.fields.user_password,
  };

  const insertUser = await Users.create(user);
  res.json(insertUser);
}

async function login(req, res) {
  const isUserExist = await Users.findOne({
    where: {
      user_email: req.fields.user_email
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
      const token = jwt.sign({
          id: isUserExist.id,
          user_name: isUserExist.user_name,
          user_email: isUserExist.user_email,
          user_role: isUserExist.user_role,
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
  update,
};
