const { sequelize } = require("../config/connection");
const { Model, DataTypes } = require("sequelize");
// const categoryModel = require("./category.model");

class ProductModel extends Model {}

ProductModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    url_image: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    discount: {
      type: DataTypes.INTEGER,
    },
    category: {
      type: DataTypes.INTEGER,
      // field: "category"
      // references: {
      //   model: "category",
      //   key: "id",
      // },
      // onDelete: "RESTRICT",
      // onUpdate: "RESTRICT"
    },
  },
  {
    sequelize,
    modelName: "product",
    freezeTableName: true,
    timestamps: false,
    underscored: true,
  }
);

module.exports = ProductModel;
