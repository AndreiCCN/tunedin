"use strict";

require("dotenv").config();

const BASE_URL = "https://api.spotify.com/v1";

const TOKEN_BASE_URL = "https://accounts.spotify.com/api";

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

const REDIRECT_URI = process.env.REDIRECT_URI;

const SCOPE = process.env.SCOPE;

const STATE_KEY = "spotify_auth_state";

const MARKET = "EU";
const LOW_LIMIT = 12;
const DEFAULT_LIMIT = 28;

const APP_PORT = 5000;

module.exports = {
  BASE_URL,
  TOKEN_BASE_URL,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  REDIRECT_URI,
  SCOPE,
  STATE_KEY,
  MARKET,
  LOW_LIMIT,
  DEFAULT_LIMIT,
  APP_PORT,
};
