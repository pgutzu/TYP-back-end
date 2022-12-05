const Sequelize = require("sequelize");
const db = require("../config/database");
const Topics = require('./topics')
const Checklists = require('./checklists')

const ChecklistsTopics = db.define("checklistsTopics", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  checklist_id: {
    type: Sequelize.INTEGER,
    references:{
      model: Checklists,
      key: 'id'
    },
    allowNull: false,
  },
  topic_id: {
    type: Sequelize.INTEGER,
    references:{
      model: Topics,
      key: 'id'
    },
    allowNull: false,
  },
});

module.exports = ChecklistsTopics;
