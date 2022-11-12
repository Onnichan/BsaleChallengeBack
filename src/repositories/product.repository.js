const { Op } = require("sequelize");
const { productModel, categoryModel } = require("../models");

class ProductRepository {
  async getAll(offset, limit) {
    const products = await productModel.findAndCountAll({
      offset,
      limit,
    });
    console.log(products);
    return products;
  }

  async searchProduct(search) {
    console.log(search);
    const products = await productModel.findAndCountAll({
      where: { [Op.or]: [{ name: search }] },
      include: [
        {
          model: categoryModel,
          as: "categories",
          required: true,
          attributes: ["name"],
        },
      ],
      subQuery: false,
    });
    return products;
  }
}

module.exports = new ProductRepository();
