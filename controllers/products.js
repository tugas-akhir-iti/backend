const db = require("../models");
const Products = db.products;
const cloudinaryConf = require("../config/cloudinary");

async function findAll(req, res) {
  const products = await Products.findAll();
  if (products == null) {
    res.send({ message: "Belum ada product" });
  } else {
    res.send({
      data: products,
    });
  }
}

async function findById(req, res) {
  const product = await Products.findByPk(req.params.id);
  if (product == null) {
    res.send({ message: "Product tidak ada" });
  } else {
    res.send({
      data: product,
    });
  }
}

async function insert(req, res) {
  const uploadFoto = await cloudinaryConf.uploader.upload(
    req.files.product_image.path
  );
  const product = {
    product_name: req.fields.product_name,
    product_price: req.fields.product_price,
    product_description: req.fields.product_description,
    product_image: uploadFoto.secure_url,
    category_id: req.fields.category_id,
    user_id: req.fields.user_id,
  };
  const insertProduct = await Products.create(product);
  res.json(insertProduct);
}

async function update(req, res) {
  const uploadFoto = await cloudinaryConf.uploader.upload(
    req.files.product_image.path
  );
  const checkIfProductExist = await Products.findByPk(req.params.id);
  if (checkIfProductExist) {
    const product = {
      product_name: req.fields.product_name,
      product_price: req.fields.product_price,
      product_description: req.fields.product_description,
      product_image: uploadFoto.secure_url,
      category_id: req.fields.category_id,
      user_id: req.fields.user_id,
    };
    await Products.update(product, {
      where: { id: req.params.id },
    });
    res.send({ message: "Data product berhasil diupdate" });
  } else {
    res.send({ message: "Product tidak ada" });
  }
}

async function destroy(req, res) {
  const checkIfProductExist = await Products.findByPk(req.params.id);
  if (checkIfProductExist) {
    await Products.destroy({
      where: { id: req.params.id },
    });
    res.send({ message: "Product berhasil dihapus" });
  } else {
    res.send({ message: "Product tidak ada" });
  }
}

module.exports = {
  findAll,
  findById,
  insert,
  update,
  destroy,
};
