const Sequelize = require("sequelize");
const db = require("../config/database");
const Topics = require("./topics");

const Tasks = db.define("tasks", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  topic_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Topics,
      key: "id",
    },
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Tasks;
