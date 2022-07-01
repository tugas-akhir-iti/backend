var express = require("express");
var router = express.Router();
const orderController = require("../controllers/order");
const middlewareVerifyToken = require("../middlewares/verifyToken");
const middlewareProfileIsComplete = require("../middlewares/profileIsComplete");

router.post("/", middlewareVerifyToken, middlewareProfileIsComplete, orderController.insert);

router.put("/:id", middlewareVerifyToken, middlewareProfileIsComplete, orderController.update);

module.exports = router;
