const { Sequelize } = require('sequelize')

const sequelize = process.env.NODE_ENV == 'DEV' || "test" ? new Sequelize(
  process.env.DATABASE_LOCAL,
  process.env.DB_USER_LOCAL,
  process.env.PASSWORD_LOCAL,
  {
    host: process.env.HOST_LOCAL,
    dialect: process.env.DIALECT,
  }
) : new Sequelize(
  process.env.DATABASE_TEST,
  process.env.DB_USER_TEST,
  process.env.PASSWORD_TEST,
  {
    host: process.env.HOST_TEST,
    dialect: process.env.DIALECT
  }
)


module.exports = sequelize
