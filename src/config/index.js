if (process.env.NODE_ENV !== "production") {
  const path = require("path").join("", "", ".env");
  require("dotenv").config({ path });
}

module.exports = {
  DATABASE: process.env.DATABASE,
  HOST: process.env.HOST,
  USER: proccess.env.USER,
  PASSWORD: process.env.PASSWORD,
};
