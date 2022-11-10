const { Op } = require("sequelize");
const { productModel, categoryModel } = require("../models");

class ProductRepository {
  async getAll() {
    console.log("requested products");
    const products = await productModel.findAndCountAll({
      offset: 5,
      limit: 5,
    });
    console.log(products);
    return products;
  }

  async searchProduct(search) {
    const products = await categoryModel.findAndCountAll(
      { where: { [Op.or]: [{ name: search }] }, include:{ model: productModel, as: "products"} },
      {
        offset: 5,
        limit: 5,
      }
    );
    return products;
  }
}

module.exports = new ProductRepository();
