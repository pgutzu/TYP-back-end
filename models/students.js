const Sequelize = require("sequelize");
const db = require("../config/database");
const Users = require("./users");

const Students = db.define("students", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  fullName: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Users,
      key: "id",
    },
  },
});

module.exports = Students;
