var express = require("express");
var router = express.Router();
const productController = require("../controllers/product");
const middlewareVerifyToken = require("../middlewares/verifyToken");
const middlewareProfileIsComplete = require("../middlewares/profileIsComplete");

router.get("/", productController.findAll);

router.get("/:id", productController.findById);

router.get("/categories/:id", productController.findByCategoryId);

router.post("/", middlewareVerifyToken, middlewareProfileIsComplete, productController.insert);

router.put("/:id", middlewareVerifyToken, middlewareProfileIsComplete, productController.update);

router.delete("/:id", middlewareVerifyToken, middlewareProfileIsComplete, productController.destroy);

module.exports = router;
