const categoryRepository = require("../repositories/category.repository");

class CategoryService {
  async getAll() {
    const categories = await categoryRepository.getAll();
    return categories;
  }

  async productsByCategory(offset, limit, category){
    const filteredProduct = await categoryRepository.productsByCategory(offset, limit, category);
    return filteredProduct;
  }
}

module.exports = new CategoryService();
