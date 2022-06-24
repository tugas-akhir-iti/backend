const db = require("../models");
const User = db.users;
const Products = db.products;
const Category = db.categories;

async function findAll(req, res) {
  const products = await Products.findAll({
    include: [
      {model: Category}, 
      {model: User}
    ]
  });
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

//Find Product By Category Id
async function findByCategoryId(req, res) {
  const product = await Products.findAll({
    where: {
      category_id: req.params.id
    }
  });

  if (product == null) {
    res.send({ message: "Product tidak ada" });
  } else {
    res.send({
      data: product,
    });
  }
}

async function insert(req, res) {
  const product = {
    product_name: req.body.product_name,
    product_price: req.body.product_price,
    product_description: req.body.product_description,
    product_image: req.body.product_image,
    category_id: req.body.category_id,
    user_id: req.body.user_id,
  };
  const insertProduct = await Products.create(product);
  res.json(insertProduct);
}

async function update(req, res) {
  const checkIfProductExist = await Products.findByPk(req.params.id);
  if (checkIfProductExist) {
    const product = {
      product_name: req.body.product_name,
      product_price: req.body.product_price,
      product_description: req.body.product_description,
      product_image: req.body.product_image,
      category_id: req.body.category_id,
      user_id: req.body.user_id,
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
  findByCategoryId,
  insert,
  update,
  destroy,
};
