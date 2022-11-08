const { Router } = require("express");
const CategoryController = require("../controllers/category.controller");

module.exports = function () {
  const router = Router();

  router.get("/", CategoryController.getAll);
  return router;
};
