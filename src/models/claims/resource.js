const jsonAPI = require('@coding-blocks/jsonapi-server')
const Joi = jsonAPI.Joi
const handlers = require('./handlers')

exports.resource = jsonAPI.define({
  namespace: 'json:api',
  resource: 'claims',
  handlers: handlers.sqlHandler,
  attributes: {
    description: Joi.string().max(1000),
    link: Joi.string().uri({scheme: ['http', 'https']}),
    claimant: Joi.one('users'),
    task: Joi.one('tasks')
  },
  examples: [
    {
      type: 'claims',
      id: 1,
      description: 'I made a question for N-Queens',
      link: 'http://cb.lk/q/111',
      task: {
        type: 'tasks',
        id: 1
      },
      claimant: {
        id: 1,
        type: 'users'
      }
    },
    {
      type: 'claims',
      id: 2,
      description: 'Proposing a catalan number question',
      link: 'https://cb.lk/somelink',
      task: {
        type: 'tasks',
        id: 2
      },
      claimant: {
        id: 3,
        type: 'users'
      }
    }
  ]
})

handlers.sqlHandler.populate({force: true})
