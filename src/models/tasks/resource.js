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
    },
    {
      type: 'tasks',
      id: '086dda0b-d1ab-4a82-9fea-f47cdbdc111c',
      title: 'Catalan Number Problems',
      description: 'Prepare a question like bracket matching',
      instances: 1,
      owner: {
        id: '4988252d-370b-445b-9660-6e7c9478421b',
        type: 'users'
      }
    },
    {
      type: 'tasks',
      id: '0eac5cc9-8a9e-4705-9665-354f2b1b1010',
      title: 'OOP Question - Constructor',
      description: 'Prepare questions on constructors',
      instances: 3,
      owner: {
        id: '27fb39e7-e80e-41ae-a944-2de6eed3a739',
        type: 'users'
      }
    }
  ]
})

handlers.sqlHandler.populate({force: true})
