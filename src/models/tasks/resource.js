const jsonAPI = require('@coding-blocks/jsonapi-server')
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
      id: 1,
      title: 'N-Queens Problem',
      description: 'Prepare a question on N-Queens',
      instances: 2,
      owner: {
        id: 2,
        type: 'users'
      }
    },
    {
      type: 'tasks',
      id: 2,
      title: 'Catalan Number Problems',
      description: 'Prepare a question like bracket matching',
      instances: 1,
      owner: {
        id: 2,
        type: 'users'
      }
    },
    {
      type: 'tasks',
      id: 3,
      title: 'OOP Question - Constructor',
      description: 'Prepare questions on constructors',
      instances: 3,
      owner: {
        id: 4,
        type: 'users'
      }
    }
  ]
})

handlers.sqlHandler.populate({force: true})
