const productRepository = require("../repositories/product.repository");

class ProductService {
  async getAll() {
    const products = await productRepository.getAll();
    return products;
  }
}

module.exports = new ProductService();
