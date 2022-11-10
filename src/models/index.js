const CategoryModel = require("./category.model");
const ProductModel = require("./product.model");

CategoryModel.hasMany(ProductModel, { foreignKey: "category", as: "products" });
ProductModel.belongsTo(CategoryModel, { foreignKey: "id", as: "categories" });

module.exports = {
  categoryModel: CategoryModel,
  productModel: ProductModel,
};
