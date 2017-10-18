const jsonAPI = require('jsonapi-server')
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
    },
    {
      type: 'claims',
      id: '9ff16db9-7f32-45ff-9ac3-600980eb6e8c',
      description: 'Proposing a catalan number question',
      link: 'The best catalan number question I found on the internet.',
      task: {
        type: 'tasks',
        id: '086dda0b-d1ab-4a82-9fea-f47cdbdc111c'
      },
      claimant: {
        id: '9cd6dfcf-0cfa-4691-8832-efb61188440f',
        type: 'users'
      }
    }
  ]
})

handlers.sqlHandler.populate({force: true})
