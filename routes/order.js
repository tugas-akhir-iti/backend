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

router.post(
  "/",
  middlewareVerifyToken,
  middlewareProfileIsComplete,
  orderController.insert
);

router.put(
  "/:id",
  middlewareVerifyToken,
  middlewareProfileIsComplete,
  orderController.update
);

module.exports = router;
