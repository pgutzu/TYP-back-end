const { Sequelize } = require('sequelize')


const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  }
);


module.exports = sequelize

// const Checklists = require("../models/checklists");
// Checklists.sync({force: true})
// const Modules = require("../models/modules");
// const SocialNetworks = require("../models/socialNetworks");
// const Statuses = require("../models/statuses");
// const Tasks = require("../models/tasks");
// const Topics = require("../models/Topics");
// const ChecklistsTopics = require("../models/checklistsTopics");
// const Users = require("../models/users");
// const StudentModules = require("../models/studentModules");
// const StudentTasks = require("../models/studentTasks");
// const Students = require("../models/students");
// const Laudatories = require("../models/laudatories");