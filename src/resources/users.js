const jsonAPI = require('jsonapi-server')
const SQLHandler = require('../handlers/SQLHandler')
const Joi = jsonAPI.Joi

const handler = SQLHandler.createHandler()

exports.resource = jsonAPI.define({
  namespace: 'json:api',
  resource: 'users',
  handlers: handler,
  attributes: {
    username: Joi.string().alphanum(),
    tasks: Joi.many('tasks'),
    claims: Joi.many('claims')
  }
})

handler.populate()
