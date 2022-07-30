var express = require("express");
var router = express.Router();
const cors = require("cors");
const userController = require("../controllers/user");
const middlewareVerifyToken = require("../middlewares/verifyToken");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

router.use(cors(corsOptions));

router.get("/", middlewareVerifyToken, userController.get);

router.get("/banks", userController.getBanks);

router.get("/roles", userController.getRoles);

// router.get(
//   "/notifications",
//   middlewareVerifyToken,
//   userController.getNotifications
// );
// router.get(
//   "/transactions",
//   middlewareVerifyToken,
//   userController.getTransactionsHistory
// );
router.post("/", userController.create);
router.put("/", middlewareVerifyToken, userController.update);
router.post("/login", userController.login);

module.exports = router;
