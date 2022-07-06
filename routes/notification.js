var express = require("express");
var router = express.Router();
const notificationController = require("../controllers/notification");
const middlewareVerifyToken = require("../middlewares/verifyToken");

router.get("/", middlewareVerifyToken, notificationController.get);

module.exports = router;
