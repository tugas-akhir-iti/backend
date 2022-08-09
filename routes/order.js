var express = require("express");
var router = express.Router();
const cors = require("cors");
const orderController = require("../controllers/order");
const middlewareVerifyToken = require("../middlewares/verifyToken");
const middlewareProfileIsComplete = require("../middlewares/profileIsComplete");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

router.use(cors(corsOptions));

router.get('/', middlewareVerifyToken, orderController.findAll);

router.get('/seller', middlewareVerifyToken, middlewareProfileIsComplete,orderController.findAllSellerOrder);

router.get('/order-status/', orderController.findAllOrderStatuses);

router.post(
  "/",
  middlewareVerifyToken,
  middlewareProfileIsComplete,
  orderController.insertOrder
);

router.post(
  "/order-detail/",
  middlewareVerifyToken,
  middlewareProfileIsComplete,
  orderController.insertOrderDetail
);

router.put(
  "/:id",
  middlewareVerifyToken,
  middlewareProfileIsComplete,
  orderController.updateStatus,
);

router.put(
  "/order-transfer/:id",
  middlewareVerifyToken,
  middlewareProfileIsComplete,
  orderController.updateOrderTransfer,
);

module.exports = router;
