const { Sequelize } = require('sequelize')

console.log(process.env.NODE_ENV == 'DEV')

let sequelize

if (process.env.NODE_ENV == 'DEV') {
  sequelize = new Sequelize(
    process.env.DATABASE_LOCAL,
    process.env.DB_USER_LOCAL,
    process.env.PASSWORD_LOCAL,
    {
      host: process.env.HOST_LOCAL,
      dialect: process.env.DIALECT,
    }
  )
} else {
  sequelize = new Sequelize(
    process.env.DATABASE_TEST,
    process.env.DB_USER_TEST,
    process.env.PASSWORD_TEST,
    {
      host: process.env.HOST_TEST,
      dialect: process.env.DIALECT
    }
  )
}



module.exports = sequelize
