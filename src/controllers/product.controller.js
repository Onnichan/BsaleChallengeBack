const productService = require("../services/product.service");

class ProductController {
  async getAll(req, res) {
    console.log("request");
    let { offset, limit } = req.query;
    offset = Number(offset);
    limit = Number(limit);
    const products = await productService.getAll(offset, limit);
    res.send(products);
  }

  async searchProduct(req, res) {
    const { search } = req.params;
    const filteredProduct = await productService.searchProduct(search);
    res.send(filteredProduct);
  }
}

module.exports = new ProductController();
