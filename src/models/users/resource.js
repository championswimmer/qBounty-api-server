const jsonAPI = require('@coding-blocks/jsonapi-server')
const Joi = jsonAPI.Joi
const handlers = require('./handlers')

exports.resource = jsonAPI.define({
  namespace: 'json:api',
  resource: 'users',
  handlers: handlers.sqlHandler,
  attributes: {
    username: Joi.string().alphanum()
  },
  examples: [
    {
      id: 1,
      type: 'users',
      username: 'arnav'
    },
    {
      id: 2,
      type: 'users',
      username: 'prateek'
    },
    {
      id: 3,
      type: 'users',
      username: 'garima'
    },
    {
      id: 4,
      type: 'users',
      username: 'deepak'
    }
  ]
})

handlers.sqlHandler.populate({force: true})
