"use strict";

const axios = require("axios");
const querystring = require("querystring");

const apiConfig = require("./api.config");

/**
 * axios instance to access token and refresh token request
 */
const token = axios.create({
  baseURL: apiConfig.TOKEN_BASE_URL,
  headers: {
    Authorization: `Basic ${Buffer.from(
      apiConfig.SPOTIFY_CLIENT_ID + ":" + apiConfig.SPOTIFY_CLIENT_SECRET
    ).toString("base64")}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

module.exports = {
  token,
};
