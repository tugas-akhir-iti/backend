const db = require('../models');
const product = require('../models/products.js');
const Product = db.products;

//get product
async function findAll(){
    const products = await Product.findAll();
    return products;
}

async function findById(id){
    const products = await Product.findByPk(id);
    if(products==null){
        return{message:'Product tidak ada'}
    }else{
        return products;
    }
}

async function insert(data){
    const products = await Product.create(data);
    return products;
}

module.exports={
    findAll,
    findById,
    insert
};
