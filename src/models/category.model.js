const { sequelize } = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class CategoryModel extends Model {}

CategoryModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "category",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = CategoryModel;
