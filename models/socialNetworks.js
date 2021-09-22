const Sequelize = require("sequelize");
const db = require("../config/database");


const SocialNetworks = db.define("socialNetworks", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  student_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  telegram: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  instagram: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = SocialNetworks;
