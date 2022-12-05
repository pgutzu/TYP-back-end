const Sequelize = require("sequelize");
const db = require("../config/database");
const Modules = require("./modules");
const Students = require("./students");

const StudentModules = db.define("studentModules", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  moduleId: {
    type: Sequelize.INTEGER,
    references: {
      model: Modules,
      key: "id",
    },
    allowNull: false,
  },
  studentId: {
    type: Sequelize.INTEGER,
    references: {
      model: Students,
      key: "id",
    },
    allowNull: false,
  },
});

module.exports = StudentModules;
