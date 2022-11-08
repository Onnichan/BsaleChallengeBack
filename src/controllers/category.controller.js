const categoryService = require("../services/category.service")
class CategoryController {
  
  async getAll(req, res){
    console.log("request");
    const categories = await categoryService.getAll();
    res.send(categories);
  }
}

module.exports = new CategoryController();