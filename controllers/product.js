const cloudinaryConf = require("../config/cloudinary");
const db = require("../models");
const Products = db.products;
const Users = db.users;
const Categories = db.categories;
// const Notifications = db.notifications;
const Questions = db.questions;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function findAll(req, res) {
  const products = await Products.findAll({
    include: [
      {
        model: Users,
      },
    ],
  });

  let response = [];
  products.forEach((data) => {
    response.push({
        id: data.id,
        product_name: data.product_name,
        product_price: data.product_price,
        product_stock: data.product_stock,
        product_min_order: data.product_min_order,
        product_image: data.product_image,
        user_regency: data.User.user_regency,
        })
  });

  res.send({
    data: response,
  });
}

async function findById(req, res) {
  const product = await Products.findByPk(req.params.id, {
    include: [{ model: Users }],
  });
  if (product == null) {
    res.send({
      message: "Product tidak ada",
    });
  } else {
    let response = {
      id: product.id,
      product_name: product.product_name,
      product_price: product.product_price,
      product_stock: product.product_stock,
      product_min_order: product.product_min_order,
      product_image: product.product_image,
      product_description: product.product_description,
      user_id: product.User.id,
      user_name: product.User.user_name,
      user_image: product.User.user_image,
      user_regency: product.User.user_regency,
    };
    
    res.send({
      data: response,
    });
  }
}

async function findByCategoryId(req, res) {
  const product = await Products.findAll({
    include: [
      {
        model: Categories,
      },
      {
        model: Users,
      },
    ],
    where: {
      category_id: req.params.id,
    },
  });

  let response = [];
  product.forEach((data) => {
    response.push({
      id: data.id,
      product_name: data.product_name,
      product_price: data.product_price,
      product_stock: data.product_stock,
      product_min_order: data.product_min_order,
      product_image: data.product_image,
      user_regency: data.User.user_regency,
      })
    });

  res.send({
    data: response,
  });
}

async function findQuestion(req, res) {
  const questions = await Questions.findAll({
    include: [
      {
        model: Users,
      },
      {
        model: Products,
      },
    ],
    where: {
      product_id: req.params.id,
    },
  });

  if(questions == ""){
    res.send({
      message: "Tidak ada pertanyaan",
      data: []
    });
  } else {

    const product_owner = await Products.findByPk(req.params.id,{
      include: [
        {
          model: Users,
        },
      ],
    });

    let response = []
    questions.forEach((data) => {
      response.push({
          id: data.id,
          question: data.question,
          answare: data.answare,
          user_name_question: data.User.user_name,
          user_image_question: data.User.user_image,
          user_name_product: product_owner.User.user_name,
          user_image_product: product_owner.User.user_image,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
          })
    });

    res.send({
      data: response,
    });
  }
}

async function findByUserId(req, res) {
  const product = await Products.findAll({
    include: [
      {
        model: Users,
      },
    ],
    where: {
      user_id: req.user.id,
    },
  });

  let response = [];
  product.forEach((data) => {
    response.push({
      id: data.id,
      product_name: data.product_name,
      product_price: data.product_price,
      product_stock: data.product_stock,
      product_min_order: data.product_min_order,
      product_image: data.product_image,
      user_regency: data.User.user_regency,
    })
  });

  res.send({
    data: response,
  });
}

async function insert(req, res) {
  const uploadFoto = await cloudinaryConf.uploader.upload(
    req.files.product_image.path, 
    {folder: "rumah-tani/products"}
  );
  const product = {
    product_name: req.fields.product_name,
    product_price: req.fields.product_price,
    product_stock: req.fields.product_stock,
    product_min_order: req.fields.product_min_order,
    product_description: req.fields.product_description,
    product_image: uploadFoto.secure_url,
    product_available: true,
    category_id: req.fields.category_id,
    user_id: req.user.id,
  };
  const insertProduct = await Products.create(product);

  // const notification = {
  //   notification_title: "Berhasil di terbitkan",
  //   user_id: req.user.id,
  //   product_id: insertProduct.id,
  //   mark_as_read: false,
  // };
  // await Notifications.create(notification);
  res.json(insertProduct);
}

async function insertQuestion(req, res) {

  if(req.user.id){
    const question = {
      question: req.fields.question,
      product_id: req.fields.product_id,
      user_id: req.user.id,
    };
    const insertQst = await Questions.create(question);
    res.send("Berhasil menambahkan question");
  }
}

async function update(req, res) {
  const checkIfProductExist = await Products.findByPk(req.params.id);
  if (checkIfProductExist) {
    const uploadFoto = req.files.product_image
      ? await cloudinaryConf.uploader.upload(req.files.product_image.path, {folder: "rumah-tani/products"})
      : null;
    const product = {
      product_name: req.fields.product_name,
      product_price: req.fields.product_price,
      product_stock: req.fields.product_stock,
      product_min_order: req.fields.product_min_order,
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
async function updateQuestion(req, res) {
  const checkIfQuestionExist = await Questions.findByPk(req.params.id);
  if (checkIfQuestionExist) {
    const question = {
      answare: req.fields.answare,
    };
    await Questions.update(question, {
      where: {
        id: req.params.id,
      },
    });
    res.send({
      message: "Answare berhasil diupdate",
    });
  } else {
    res.send({
      message: "Question tidak ada",
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
    // await Notifications.destroy({
    //   where: {
    //     product_id: req.params.id,
    //   }
    // })
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
  let product = await Products.findAll({
    where: {
      product_name: {
        [Op.iLike]: `%${req.query.name}%`
      }
    },
    include:[
      {model:Users}
    ]
    
  });
  if(product!=null){
    let response = [];
    product.forEach((data) => {
      response.push({
        id: data.id,
        product_name: data.product_name,
        product_price: data.product_price,
        product_stock: data.product_stock,
        product_min_order: data.product_min_order,
        product_image: data.product_image,
        user_regency: data.User.user_regency,
        })
    });
    res.send({data: response})
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
  findQuestion,
  insertQuestion,
  updateQuestion
};
