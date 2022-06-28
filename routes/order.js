var express = require("express");
var router = express.Router();
const orderController = require("../controllers/order");

router.get("/diminati", orderController.findDiminati);
router.get("/terjual", orderController.findTerjual);
router.post("/", orderController.insert);

module.exports = router;
