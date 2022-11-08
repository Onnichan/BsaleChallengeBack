const productService = require("../services/product.service");

class CategoryController {
  async getAll(req, res) {
    console.log("request");
    const products = await productService.getAll();
    res.send(products);
  }

  async searchProduct(req, res) {
    const { search } = req.params;
    console.log(search);
  }
}

module.exports = new CategoryController();
