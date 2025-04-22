"use strict";

const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const login = require("./src/routes/login.route");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/public`));

app.use(cors()).use(cookieParser());

app.use("/login", login);

const APP_PORT = 5000;

app.listen(APP_PORT, () => {
  console.log(`Server listening at port ${APP_PORT}`);
});
