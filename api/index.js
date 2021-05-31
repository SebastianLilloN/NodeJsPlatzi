const express = require("express");
const app = express();
const config = require("../config.js");
const user = require("./components/user/network");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const auth = require("./components/auth/network");
const errors = require("../network/errors");

const swaggerDoc = require("./swagger.json");

app.use(bodyParser.json());
app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(errors);
app.listen(config.api.port, () => {
  console.log("Api escuchando en el puerto: ", config.api.port);
});
