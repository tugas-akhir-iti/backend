var express = require("express");
var router = express.Router();
const productController = require("../controllers/product");

router.get("/", productController.findAll);

router.get("/:id", productController.findById);

router.get("/categories/:id", productController.findByCategoryId);

router.post("/", productController.insert);

router.put("/:id", productController.update);

router.delete("/:id", productController.destroy);

module.exports = router;