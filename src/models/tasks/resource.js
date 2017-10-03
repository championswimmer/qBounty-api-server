const jsonAPI = require('jsonapi-server')
const Joi = jsonAPI.Joi
const handlers = require('./handlers')

exports.resource = jsonAPI.define({
  namespace: 'json:api',
  resource: 'tasks',
  handlers: handlers.sqlHandler,
  attributes: {
    title: Joi.string().max(200).required(),
    description: Joi.string().max(1000),
    instances: Joi.number().integer().min(1).default(1),
    owner: Joi.one('users'),
    claims: Joi.belongsToMany({resource: 'claims', as: 'task'})
  },
  examples: [
    {
      type: 'tasks',
      id: '68121055-1802-4395-becb-d4722d8db870',
      title: 'N-Queens Problem',
      description: 'Prepare a question on N-Queens',
      instances: 2,
      owner: {
        id: '4988252d-370b-445b-9660-6e7c9478421b',
        type: 'users'
      }
    }
  ]
})

handlers.sqlHandler.populate({force: true})
