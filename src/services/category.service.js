const categoryRepository = require("../repositories/category.repository");

class CategoryService {
  async getAll() {
    const categories = await categoryRepository.getAll();
    return categories;
  }
}

module.exports = new CategoryService();
