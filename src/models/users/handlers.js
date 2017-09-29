const jsonAPI = require('jsonapi-server')
const SQLHandler = require('../common/SQLHandler')

exports.sqlHandler = SQLHandler.createHandler()
