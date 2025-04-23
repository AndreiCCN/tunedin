"use strict";

const apiConfig = require("../config/api.config");

/**
 * Generates a random string containing numbers and letters
 * @param {number} length The length of the string
 * @returns {string} Generated string
 */
const generateRandomString = (length) => {
  let /** {string | undefined} */ randomString = "";
  const /** {string} */ possibleLetters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (let i = 0; i < length - 1; i++) {
    const /** {number} */ randomIndex = Math.floor(
        Math.random() * possibleLetters.length
      );
    randomString += possibleLetters[randomIndex];
  }

  return randomString;
};

module.exports = { generateRandomString };
