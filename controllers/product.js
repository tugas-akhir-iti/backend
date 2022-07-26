const cloudinaryConf = require("../config/cloudinary");
const db = require("../models");
const Products = db.products;
const Users = db.users;
const Categories = db.categories;
const Notifications = db.notifications;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function findAll(req, res) {
  const products = await Products.findAll({
    include: [
      {
        model: Categories,
      },
      {
        model: Users,
      },
    ],
  });
  res.send({
    data: products,
  });
}

async function findById(req, res) {
  const product = await Products.findByPk(req.params.id, {
    include: [{ model: Users }, { model: Categories }],
  });
  if (product == null) {
    res.send({
      message: "Product tidak ada",
    });
  } else {
    res.send({
      data: product,
    });
  }
}

async function findByCategoryId(req, res) {
  const product = await Products.findAll({
    include: [
      {
        model: Categories,
      },
    ],
    where: {
      category_id: req.params.id,
    },
  });
  res.send({
    data: product,
  });
}

async function findByUserId(req, res) {
  const product = await Products.findAll({
    include: [
      {
        model: Categories,
      },
    ],
    where: {
      user_id: req.user.id,
    },
  });
  res.send({
    data: product,
  });
}

async function insert(req, res) {
  const uploadFoto = await cloudinaryConf.uploader.upload(
    req.files.product_image.path, 
    {folder: "ta-latif"}
  );
  const product = {
    product_name: req.fields.product_name,
    product_price: req.fields.product_price,
    product_description: req.fields.product_description,
    product_image: uploadFoto.secure_url,
    product_available: true,
    category_id: req.fields.category_id,
    user_id: req.user.id,
  };
  const insertProduct = await Products.create(product);

  const notification = {
    notification_title: "Berhasil di terbitkan",
    user_id: req.user.id,
    product_id: insertProduct.id,
    mark_as_read: false,
  };
  await Notifications.create(notification);
  res.json(insertProduct);
}

async function update(req, res) {
  const checkIfProductExist = await Products.findByPk(req.params.id);
  if (checkIfProductExist) {
    const uploadFoto = req.files.product_image
      ? await cloudinaryConf.uploader.upload(req.files.product_image.path, {folder: "ta-latif"})
      : null;
    const product = {
      product_name: req.fields.product_name,
      product_price: req.fields.product_price,
      product_description: req.fields.product_description,
      product_image: req.files.product_image
        ? uploadFoto.secure_url
        : req.fields.product_image,
      category_id: req.fields.category_id,
    };
    await Products.update(product, {
      where: {
        id: req.params.id,
      },
    });
    res.send({
      message: "Data product berhasil diupdate",
    });
  } else {
    res.send({
      message: "Product tidak ada",
    });
  }
}

async function updateStatusProduct(req, res) {
  const checkIfProductExist = await Products.findByPk(req.params.id);
  if (checkIfProductExist) {
    const product = { product_available: req.fields.product_available };
    await Products.update(product, {
      where: {
        id: req.params.id,
      },
    });
    res.send({
      message: "Data product berhasil diupdate",
    });
  } else {
    res.send({
      message: "Product tidak ada",
    });
  }
}

async function destroy(req, res) {
  const checkIfProductExist = await Products.findByPk(req.params.id);
  if (checkIfProductExist) {
    await Notifications.destroy({
      where: {
        product_id: req.params.id,
      }
    })
    await Products.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send({
      message: "Product berhasil dihapus",
    });
  } else {
    res.send({
      message: "Product tidak ada",
    });
  }
}

async function search(req, res) {
  console.log(req.query.name)
  let product = await Products.findAll({
    where: {
      product_name: {
        [Op.iLike]: `%${req.query.name}%`
      }
    }
  });
  if(product!=null){
    res.send({data: product})
  }else{
    res.send("Product tidak ada") 
  }
}

module.exports = {
  findAll,
  findById,
  findByCategoryId,
  findByUserId,
  insert,
  update,
  updateStatusProduct,
  destroy,
  search,
};
