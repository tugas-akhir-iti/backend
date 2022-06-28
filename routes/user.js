var express = require("express");
var router = express.Router();
const userController = require("../controllers/user");

router.get("/:id", userController.get);
router.post("/", userController.create);
router.post("/login", userController.login);

module.exports = router;
