const jsonAPI = require('jsonapi-server')
const SQLHandler = require('../handlers/SQLHandler')
const Joi = jsonAPI.Joi

const handler = SQLHandler.createHandler()

exports.resource = jsonAPI.define({
  namespace: 'json:api',
  resource: 'tasks',
  handlers: handler,
  attributes: {
    title: Joi.string().alphanum().max(200),
    description: Joi.string().max(1000),
    instances: Joi.number().min(1).default(1),
    owner: Joi.belongsToOne({
      resource: 'users',
      as: 'tasks'
    }),
    claims: Joi.many('claims')
  }
})

handler.populate()
