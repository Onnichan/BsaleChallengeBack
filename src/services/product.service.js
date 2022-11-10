const productRepository = require("../repositories/product.repository");

class ProductService {
  async getAll() {
    const products = await productRepository.getAll();
    return products;
  }

  async searchProduct(search){
    const filteredProduct = await productRepository.searchProduct(search);
    return filteredProduct;
  }
}

module.exports = new ProductService();
