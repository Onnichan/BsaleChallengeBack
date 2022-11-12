const categoryService = require("../services/category.service");
class CategoryController {
  async getAll(req, res) {
    console.log("request");
    const categories = await categoryService.getAll();
    res.send(categories);
  }

  async productsByCategory(req, res) {
    const { category } = req.params;
    let { offset, limit } = req.query;
    offset = Number(offset);
    limit = Number(limit);
    console.log(offset, limit);
    const filteredProducts = await categoryService.productsByCategory(
      offset,
      limit,
      category
    );
    res.send(filteredProducts);
  }
}

module.exports = new CategoryController();
