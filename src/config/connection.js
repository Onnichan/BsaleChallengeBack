const { Sequelize } = require("sequelize");
const { DATABASE, HOST, USER, PASSWORD } = require(".");

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  dialect: "mysql",
  host: HOST,
});

module.exports = {
  sequelize,
};
