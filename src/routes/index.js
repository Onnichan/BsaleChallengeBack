const { Router, json } = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const CategoryRoutes = require("../routes/category.route");
const ProductRoutes = require("../routes/product.route");
const notfoundMiddleware = require("../middlewares/notfound.middleware");
const errorMiddleware = require("../middlewares/error.middleware");
require("express-async-errors");

module.exports = function () {
  const router = Router();
  const apiRoutes = Router();
  apiRoutes.use(json());
  apiRoutes.use(helmet());
  apiRoutes.use(morgan("dev"));
  apiRoutes.use(cors());
  apiRoutes.use("/products", ProductRoutes());
  apiRoutes.use("/categories", CategoryRoutes());

  router.use("/api/v1", apiRoutes);
  router.use(notfoundMiddleware);
  router.use(errorMiddleware);

  return router;
};
