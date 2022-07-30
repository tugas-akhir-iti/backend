var express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
const dotenv = require("dotenv");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var userRouter = require("./routes/user");
var productRouter = require("./routes/product");
var orderRouter = require("./routes/order");
var categoryRouter = require("./routes/category");
var cartRouter = require("./routes/cart");

var app = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
// load env variable
dotenv.config();

app.use(cors(corsOptions));
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
app.use("/categories", categoryRouter);
app.use("/carts", cartRouter);

module.exports = app;
