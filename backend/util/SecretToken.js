require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  const secret = process.env.TOKEN_KEY || process.env.JWT_SECRET || "zerodha_clone_dev_secret";

  return jwt.sign({ id }, secret, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};