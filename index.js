const express = require("express");
const { PORT } = require("./src/config");
const { sequelize } = require("./src/config/connection");
const routes = require("./src/routes");
const app = express();

sequelize
  .sync({ logging: true })
  .then(() => {
    app.use(routes());
    app.listen(PORT, () => {
      console.log(`Listening on PORT: ${PORT}`);
    });
  })
  .catch(console.log);
