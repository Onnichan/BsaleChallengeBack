const { categoryModel, productModel } = require("../models");
const { Op } = require("sequelize");

class CategoryRepository {
  async getAll() {
    const products = await categoryModel.findAll();
    return products;
  }

  async productsByCategory(offset, limit, category) {
    // console.log(offset, limit, category);
    const products = await categoryModel.findAndCountAll({
      where: { [Op.or]: [{ name: category }] },
      include: [{ model: productModel, as: "products", required: true }],
      offset,
      limit,
      subQuery: false,
    });
    return products;
  }
}

module.exports = new CategoryRepository();
