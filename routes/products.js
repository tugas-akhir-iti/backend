var express = require('express');
var router = express.Router();
const productController = require('../controllers/products');
const { products } = require('../models');

/* GET users listing. */
router.get('/', async function(req, res) {
    const products = await productController.findAll();
    res.send({
        data:products
    });
});

router.get('/:id', async function(req, res) {
    const products = await productController.findById(req.params.id);
    
    res.send({
        data:products
    });
});

router.post('/', async function(req, res) {
    const product = {
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        product_description: req.body.product_description,
        product_image: req.body.product_image,
        category_id: req.body.category_id,
        user_id:req.body.user_id
    };
    const products = await productController.insert(product);
    
    res.json(products);
});

module.exports = router;