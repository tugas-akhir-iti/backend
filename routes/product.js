var express = require("express");
var router = express.Router();
const cors = require("cors");
const productController = require("../controllers/product");
const middlewareVerifyToken = require("../middlewares/verifyToken");
const middlewareProfileIsComplete = require("../middlewares/profileIsComplete");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

router.use(cors(corsOptions));

router.get("/", productController.findAll);

router.get("/:id", productController.findById);

router.get("/categories/:id", productController.findByCategoryId);

router.get("/user/id", middlewareVerifyToken, productController.findByUserId);

router.get("/search/all", productController.search);

router.post(
  "/",
  middlewareVerifyToken,
  middlewareProfileIsComplete,
  productController.insert
);

router.put(
  "/:id",
  middlewareVerifyToken,
  middlewareProfileIsComplete,
  productController.update
);

router.put(
  "/status/:id",
  middlewareVerifyToken,
  middlewareProfileIsComplete,
  productController.updateStatusProduct
);

router.delete(
  "/:id",
  middlewareVerifyToken,
  middlewareProfileIsComplete,
  productController.destroy
);

module.exports = router;
