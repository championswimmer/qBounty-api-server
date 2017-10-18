const jsonAPI = require('jsonapi-server')
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
      id: '2fdfe7a5-d407-420f-8276-4f1a1e496b49',
      type: 'users',
      username: 'arnav'
    },
    {
      id: '4988252d-370b-445b-9660-6e7c9478421b',
      type: 'users',
      username: 'prateek'
    },
    {
      id: '9cd6dfcf-0cfa-4691-8832-efb61188440f',
      type: 'users',
      username: 'garima'
    },
    {
      id: '27fb39e7-e80e-41ae-a944-2de6eed3a739',
      type: 'users',
      username: 'deepak'
    }
  ]
})

handlers.sqlHandler.populate({force: true})
