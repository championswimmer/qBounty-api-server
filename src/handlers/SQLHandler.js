const SQLStore = require('jsonapi-store-relationaldb')
const debug = require('debug')('SQL')
const config = require('../../config')

exports.Handler = new SQLStore({
  dialect: config.DB_CONFIG.DB_DIALECT,
  host: config.DB_CONFIG.DB_HOST,
  port: config.DB_CONFIG.DB_PORT,
  database: config.DB_CONFIG.DB_NAME, // If not provided, defaults to the name of the resource
  username: config.DB_CONFIG.DB_USER,
  password: config.DB_CONFIG.DB_PASS,
  logging: debug
})

exports.createHandler = function () {
  return new SQLStore({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'puzzlebounty', // If not provided, defaults to the name of the resource
    username: 'puzzleuser',
    password: 'puzzlepass',
    logging: debug
  })
}
