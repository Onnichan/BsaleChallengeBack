const { categoryModel } = require("../models");

class CategoryRepository {
  async getAll() {
    const products = await categoryModel.findAll();
    return products;
  }
}

module.exports = new CategoryRepository();
