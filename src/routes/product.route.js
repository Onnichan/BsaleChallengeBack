const { Router } = require("express");
const ProductController = require("../controllers/product.controller");

module.exports = function () {
  const router = Router();

  router.get("/", ProductController.getAll);
  router.get("/:search", ProductController.searchProduct);
  
  return router;
};
