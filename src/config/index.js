if (process.env.NODE_ENV !== "production") {
  const path = require("path").join("", "", ".env");
  require("dotenv").config({ path });
}

module.exports = {
  PORT: process.env.PORT,
  DATABASE: process.env.DATABASE,
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
};
