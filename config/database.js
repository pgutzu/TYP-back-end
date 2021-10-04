const { Sequelize } = require('sequelize')

const sequelize = process.env.NODE_ENV == 'DEV ' ? new Sequelize(
  process.env.DATABASE,
  process.env.DB_USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
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
