"use strict";

const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const login = require("./src/routes/login.route");
const auth = require("./src/routes/auth.route");
const apiConfig = require("./src/config/api.config");
const authenticatedUser = require("./src/middleware/auth_user.middleware");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/public`));

app.use(cors()).use(cookieParser());

app.use("/login", login);
app.use("/auth", auth);

app.use(authenticatedUser);

app.listen(apiConfig.APP_PORT, () => {
  console.log(`Server listening at port ${apiConfig.APP_PORT}`);
});
