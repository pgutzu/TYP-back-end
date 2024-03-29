const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const routes = require("./routes/index");
const db = require("./config/database");
const bodyParser = require("body-parser");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "TYP API",
      description: "Track Your Progress API",
      servers: ["http://localhost:3000"],
      version: "1.0.1",
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () =>
    console.log(
      `Server started on PORT ${port}, process.env:++${process.env.NODE_ENV}++`
    )
  );
}

console.log(db);

db.authenticate()
  .then(() => console.log("DB connected!"))
  .catch((err) => console.log(err));

console.log(db);

app.use("/api", routes);

module.exports = app;
