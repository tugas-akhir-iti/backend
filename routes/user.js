var express = require("express");
var router = express.Router();
const userController = require("../controllers/user");
const middlewareVerifyToken = require("../middlewares/verifyToken");

router.get("/", middlewareVerifyToken, userController.get);
router.get("/notifications", middlewareVerifyToken, userController.getNotications);
router.get("/transactions", middlewareVerifyToken, userController.getTransactionsHistory);
router.post("/", userController.create);
router.put("/", middlewareVerifyToken, userController.update);
router.post("/login", userController.login);

module.exports = router;
