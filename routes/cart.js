var express = require("express");
var router = express.Router();
const cors = require("cors");
const cartController = require("../controllers/cart");
const middlewareVerifyToken = require("../middlewares/verifyToken");
const middlewareProfileIsComplete = require("../middlewares/profileIsComplete");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

router.use(cors(corsOptions));

router.get(
  '/',
  middlewareVerifyToken,
  cartController.findCartByUserId);

router.post(
  "/",
  middlewareVerifyToken,
  cartController.insert
);

router.put(
  "/:id",
  middlewareVerifyToken,
  cartController.update
);

router.delete(
  "/:id",
  middlewareVerifyToken,
  cartController.destroy
);

module.exports = router;
