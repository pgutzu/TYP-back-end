const Sequelize = require("sequelize");
const db = require("../config/database");
const Statuses = require("./statuses");
const Tasks = require("./tasks");
const Students = require("./students");

const StudentTasks = db.define("studentTasks", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  student_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Students,
      key: "id",
    },
  },
  task_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Tasks,
      key: "id",
    },
  },
  status_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Statuses,
      key: "id",
    },
  },
  link_github: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = StudentTasks;
