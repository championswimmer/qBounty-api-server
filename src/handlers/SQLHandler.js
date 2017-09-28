const SQLStore = require('jsonapi-store-sequelize')
const debug = require('debug')('SQL')
const config = require('../../config')

exports.createHandler = function () {
  return new SQLStore({
    dialect: config.DB_CONFIG.DB_DIALECT,
    host: config.DB_CONFIG.DB_HOST,
    port: config.DB_CONFIG.DB_PORT,
    database: config.DB_CONFIG.DB_NAME, // If not provided, defaults to the name of the resource
    username: config.DB_CONFIG.DB_USER,
    password: config.DB_CONFIG.DB_PASS,
    logging: debug
  })
}
