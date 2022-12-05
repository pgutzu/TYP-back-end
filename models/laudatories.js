const Sequelize = require("sequelize");
const db = require("../config/database");
const Students = require("./students");

const Laudatories = db.define("laudatories", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  studentFrom_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Students,
      key: "id",
    },
    allowNull: false,
  },
  studentTo_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Students,
      key: "id",
    },
    allowNull: false,
  },
});

module.exports = Laudatories;
