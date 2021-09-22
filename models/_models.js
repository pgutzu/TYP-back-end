const Checklists = require("./checklists");
const Modules = require("./modules");
const SocialNetworks = require("./socialNetworks");
const Statuses = require("./statuses");
const Tasks = require("./tasks");
const Topics = require("./topics");
const ChecklistsTopics = require("./checklistsTopics");
const Users = require("./users");
const StudentModules = require("./studentModules");
const StudentTasks = require("./studentTasks");
const Students = require("./students");
const Laudatories = require("./laudatories");

Users.hasOne(Students);
Students.belongsTo(Users, { foreignKey: "user_id" });

// create fake data

// Statuses.sync({ force: true}).then(function () {
//     return Statuses.create({
//         text: 'Pending'
//     })
// })

// Modules.sync({ force: true }).then(function () {
//   return Modules.create({
//     title: "React",
//     color: "#0000FF",
//   });
// });

// Tasks.sync({ force: true }).then(function () {
//   return Tasks.create({
//     module_id: 1,
//     title: "Задача 2",
//     description: `Тролли атакуют ваш раздел комментариев!`,
//   });
// });

// UserTasks.sync({force: true}).then(function() {
//     return UserTasks.create({
//         user_id: 1,
//         task_id: 1,
//         status_id: 1,
//         link_github: "https://github.com/ownfrezzy/todo/blob/master/services/todo.services.js#L38"
//     })
// })

// SocialNetworks.sync({ force: true }).then(function () {
//   return SocialNetworks.create({
//     telegram: "@liriksachuk",
//     instagram: "@liriksachuk",
//     user_id: 1,
//   });
// });

// Themes.sync({ force: true }).then(function () {
//   return Themes.create({
//     title: "Variables",
//     content: "pacvoevk evk erlvwrkv rv j",
//     module_id: 1,
//   });
// });

// UsersModules.sync({ force: true }).then(function () {
//   return UsersModules.create({
//     user_id: 1,
//     module_id: 1,
//   });
// });

// Checklists.sync({ force: true }).then(function () {
//   return Checklists.create({
//     title: "Чек-лист №1",
//     module_id: 1,
//   });
// });

// themesChecklist.sync({ force: true }).then(function () {
//   return themesChecklist.create({
//     checklist_id: 1,
//     theme_id: 1,
//   });
// });

const _models = {
  Checklists,
  ChecklistsTopics,
  Laudatories,
  Modules,
  SocialNetworks,
  Statuses,
  StudentModules,
  Students,
  StudentTasks,
  Tasks,
  Topics,
  Users,
};

module.exports = _models;
