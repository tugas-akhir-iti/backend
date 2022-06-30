var express = require("express");
var router = express.Router();
const orderController = require("../controllers/order");

router.post("/", orderController.insert);

router.put("/:id", orderController.update);

module.exports = router;
