var express = require("express");
var router = express.Router();
const userController = require("../controllers/user");
const middlewareVerifyToken = require("../middlewares/verifyToken");

router.get("/:id", middlewareVerifyToken, userController.get);
router.post("/", userController.create);
router.put("/:id", middlewareVerifyToken, userController.update);
router.post("/login", userController.login);

module.exports = router;
