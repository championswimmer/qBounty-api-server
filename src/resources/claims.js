const jsonAPI = require('jsonapi-server')
const SQLHandler = require('../handlers/SQLHandler')
const Joi = jsonAPI.Joi

const handler = SQLHandler.createHandler()

exports.resource = jsonAPI.define({
  namespace: 'json:api',
  resource: 'claims',
  handlers: handler,
  attributes: {
    description: Joi.string().max(1000),
    task: Joi.belongsToOne({
      resource: 'tasks',
      as: 'claims'
    }),
    owner: Joi.belongsToOne({
      resource: 'users',
      as: 'claims'
    })
  }
})

handler.populate()
