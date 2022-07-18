var express = require('express');
var router = express.Router();
const categoryController = require("../controllers/category");

router.get("/", categoryController.findAll);

module.exports = router;
