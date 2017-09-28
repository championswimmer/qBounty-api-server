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
    link: Joi.string().uri({scheme: ['http', 'https']}),
    claimant: Joi.one('users'),
    task: Joi.one('tasks')
  },
  examples: [
    {
      type: 'claims',
      id: '2a2238fa-5b24-4ba5-983b-c6c2c7819a27',
      description: 'I made a question for N-Queens',
      link: 'http://cb.lk/q/111',
      task: {
        type: 'tasks',
        id: '68121055-1802-4395-becb-d4722d8db870'
      },
      claimant: {
        id: '2fdfe7a5-d407-420f-8276-4f1a1e496b49',
        type: 'users'
      }
    }
  ]
})

handler.populate({force: true})
