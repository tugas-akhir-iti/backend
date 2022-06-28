var express = require("express");
const formidable = require("express-formidable");
const dotenv = require("dotenv");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var userRouter = require("./routes/user");
var productRouter = require("./routes/product");
var orderRouter = require("./routes/order");

var app = express();

// load env variable
dotenv.config();

app.use(logger("dev"));
app.use(express.json());
app.use(formidable());
app.use(express.static('uploads'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);

module.exports = app;
