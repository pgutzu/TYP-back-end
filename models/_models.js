const Modules = require("./modules");
const SocialNetworks = require("./socialNetworks");
const Users = require("./users");
const StudentModules = require("./studentModules");
const Students = require("./students");
// const Checklists = require("./checklists");
// const Statuses = require("./statuses");
// const Tasks = require("./tasks");
// const Topics = require("./topics");
// const ChecklistsTopics = require("./checklistsTopics");
// const StudentTasks = require("./studentTasks");
// const Laudatories = require("./laudatories");

Users.hasOne(Students, { foreignKey: "user_id" });
Students.belongsTo(Users, { foreignKey: "user_id" });

Students.hasOne(SocialNetworks, { foreignKey: "student_id" });
SocialNetworks.belongsTo(Students, { foreignKey: "student_id" });

Students.belongsToMany(Modules, {
  through: "studentModules",
});
Modules.belongsToMany(Students, {
  through: "studentModules",
});

// Statuses.hasMany(StudentTasks, { foreignKey: "status_id" });
// StudentTasks.belongsTo(Statuses);

// Students.belongsToMany(Tasks, { through: "studentTasks" });
// Tasks.belongsToMany(Students, { through: "studentTasks" });

// Modules.hasMany(Checklists, { foreignKey: "module_id" });
// Checklists.belongsTo(Modules);

// Checklists.belongsToMany(Topics, { through: "checklistsTopics" });
// Topics.belongsToMany(Checklists, { through: "checklistsTopics" });

// Topics.hasMany(Tasks, { foreignKey: "topic_id" });
// Tasks.belongsTo(Topics);

//____________________________________create fake data

// Users.sync({ force: true }).then(async () => {
//   await Users.create({
//     login: "Vasya",
//     password: "Vasya",
//     isAdmin: false,
//   });
// });

// Students.sync({ force: true }).then(async () => {
//   await Students.create({
//     fullName: "Vasya Vlazhniy",
//     user_id: 1,
//   });
// });

// SocialNetworks.sync({ force: true }).then(async () => {
//   await SocialNetworks.create({
//     student_id: 1,
//     telegram: "@hellobye",
//     instagram: "@kogochego",
//   });
// });

// Modules.sync({ force: true }).then(async () => {
//   await Modules.create({
//     title: "JavaScript",
//     color: "#FC39FE",
//   });
// });

// StudentModules.sync({ force: true }).then(async () => {
//   await StudentModules.create({
//     moduleId: 1,
//     studentId: 2,
//   });
// });

// Statuses.sync({   force: true }).then(async () => {
//   await Statuses.create({
//     description: "Pending",
//   });
// });


// Topics.sync({ force: true }).then(async () => {
//   await Topics.create({
//     title: "Var, Let, Const",
//     description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
//   });
// });

// Tasks.sync({ force: true }).then(async () => {
//   await Tasks.create({
//     title: "Task №1. Drink beer",
//     description: "Go and drink few bottles of beer please",
//     topic_id: 1,
//   });
// });


// StudentTasks.sync({ force: true }).then(async () => {
//   await StudentTasks.create({
//     student_id: 1,
//     task_id: 1,
//     github_link: "fakelink",
//     status_id: 1,
//   });
// });

// Checklists.sync({ force: true }).then(async () => {
//   await Checklists.create({
//     title: "Checklist №1",
//     module_id: 1,
//   });
// });

// ChecklistsTopics.sync({ force: true }).then(async () => {
//   await ChecklistsTopics.create({
//     checklist_id: 1,
//     topic_id: 1,
//   });
// });

// Laudatories.sync({ force: true }).then(async () => {});

const _models = {
  Modules,
  SocialNetworks,
  StudentModules,
  Users,
  Students,
  // Checklists,
  // ChecklistsTopics,
  // Laudatories,
  // Statuses,
  // StudentTasks,
  // Tasks,
  // Topics,
};

module.exports = _models;
