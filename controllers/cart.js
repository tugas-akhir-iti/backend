const db = require("../models");
const Carts = db.carts;
const Products = db.products;

async function findCartByUserId(req, res) {
  const cart = await Carts.findAll({
    where:{
        user_id:req.user.id
    },
    include:[
        {
            model: Products,
        }
    ],
  });

  let response = [];
  cart.forEach((data) => {
    response.push({
        id: data.id,
        cart_qty: data.cart_qty,
        user_id: data.user_id,
        product_id: data.product_id,
        product_name: data.Product.product_name,
        product_price: data.Product.product_price,
        product_stock: data.Product.product_stock,
        product_image: data.Product.product_image,
        })
  });
  
  res.send({
    data: response,
  });
  if(cart==null){
    res.send({message:"Cart kosong"})
  }
}

async function insert(req, res) {
  const cart = {
    cart_qty: req.fields.cart_qty,
    product_id: req.fields.product_id,
    user_id: req.user.id,
  };
  const createCart = await Carts.create(cart);

  if(createCart== null){
    res.send({
        message: "Gagal tambah cart",
    });
  }else{
    res.send({
        message: "Berhasil tambah cart",
    });
  }
}

async function update(req, res) {
  const checkIfCartExist = await Carts.findByPk(req.params.id);
  if (checkIfCartExist) {
    const cart = {
      cart_qty: req.fields.cart_qty,
    };
    await Carts.update(cart, {
      where: {
        id: req.params.id,
      },
    });

    res.send({
      message: `Cart_qty berhasil diupdate ${cart.cart_qty}`,
    });
  } else {
    res.send({
      message: "Cart gagal di update",
    });
  }
}

async function destroy(req, res) {
    const checkIfCartExist = await Carts.findByPk(req.params.id);
    if (checkIfCartExist) {
      await Carts.destroy({
        where: {
            id: req.params.id,
        }
      })

      res.send({
        message: "Cart berhasil dihapus",
      });
    } else {
      res.send({
        message: "Cart tidak ada",
      });
    }
}

module.exports = {
  insert,
  update,
  destroy,
  findCartByUserId
};
