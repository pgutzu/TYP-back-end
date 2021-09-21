const Sequelize = require("sequelize");
const db = require("../config/database");
const Modules = require("./modules");
const Students = require("./students");

const StudentModules = db.define("usersModules", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  module_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Modules,
      key: "id",
    },
    allowNull: false,
  },
  student_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Students,
      key: "id",
    },
    allowNull: false,
  },
});

module.exports = StudentModules;
