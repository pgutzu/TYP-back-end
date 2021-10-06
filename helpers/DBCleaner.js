console.log(process.env.NODE_ENV);
require("dotenv").config();
const db = require("../config/database");
const routes = require("../routes/index");
db.authenticate()
  .then(() => console.log("DB connected!"))
  .catch((err) => console.log(err));

let clean = async () => await db.sync({ force: true });
clean()


