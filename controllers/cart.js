const db = require("../models");
const Users = db.users;
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
            include:[{
              model: Users
            }]
        }
    ],
  });

  // cek user product
  let user = []
  //push data user_product
  let user_product = []
  cart.forEach((data) => {
    //includes() is not supported in Internet Explorer or Edge 13 (or earlier).
    if(!user.includes(data.Product.User.user_name)){
      user.push(data.Product.User.user_name)
      user_product.push({
        product_owner_id: data.Product.User.id,
        product_owner_name: data.Product.User.user_name,
        product_owner_regency: data.Product.User.user_regency
      })
    }
  });
  
  let response=[]
  let num_loop = 0
  user_product.forEach((data) => {
    response.push({
      product_owner_id: data.product_owner_id,
      product_owner_name: data.product_owner_name,
      product_owner_regency: data.product_owner_regency,
      product_cart:[]
    })

    cart.forEach((data) => {
      if(response[num_loop].product_owner_id == data.Product.user_id){
        response[num_loop].product_cart.push({
          cart_id: data.id,
          product_id: data.Product.id,
          product_name: data.Product.product_name,
          product_image: data.Product.product_image,
          product_price: data.Product.product_price,
          product_min_order: data.Product.product_min_order,
          product_stock: data.Product.product_stock,
          cart_qty: data.cart_qty,
        })
      }
    })

    num_loop += 1
  })

  res.send({
    cart : response
  });
  if(cart==null){
    res.send({message:"Cart kosong", data:[]})
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
