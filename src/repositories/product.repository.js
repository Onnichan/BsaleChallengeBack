const { productModel } = require("../models");

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
}

module.exports = new ProductRepository();
