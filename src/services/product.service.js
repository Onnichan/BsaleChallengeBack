const productRepository = require("../repositories/product.repository");

class ProductService {
  async getAll(offset, limit) {
    const products = await productRepository.getAll(offset, limit);
    return products;
  }

  async searchProduct(search) {
    const filteredProduct = await productRepository.searchProduct(search);
    return filteredProduct;
  }
}

module.exports = new ProductService();
