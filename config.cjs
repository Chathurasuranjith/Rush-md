// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "Rushmd~9RCq3h8G",
  PREFIX: process.env.PREFIX || '.',
  MODE: process.env.MODE || "public",
  };


module.exports = config;
