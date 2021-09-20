const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const routes = require("./routes/index");
const bodyParser = require("body-parser");

app.use(bodyParser.json()); 

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.listen(port, () => console.log(`Server started on PORT ${port}`));

app.use("/api", routes);

module.exports = app;
