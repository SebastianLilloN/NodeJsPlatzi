const express = require("express");
const app = express();
const config = require("../config.js");
const bodyParser = require("body-parser");
const post = require("./components/post/network");
const errors = require("../network/errors");

app.use(bodyParser.json());
app.use("/api/post", post);
app.use(errors);
app.listen(config.post.port, () => {
  console.log("Api escuchando en el puerto: ", config.post.port);
});
