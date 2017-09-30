const jsonAPI = require('jsonapi-server')
const Joi = jsonAPI.Joi
const handlers = require('./handlers')

exports.resource = jsonAPI.define({
  namespace: 'json:api',
  resource: 'users',
  handlers: handlers.sqlHandler,
  attributes: {
    username: Joi.string().alphanum(),
    tasks: Joi.belongsToMany({resource: 'tasks', as: 'taskOwner'}),
    claims: Joi.belongsToMany({resource: 'claims', as: 'claimant'})
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
    }
  ]
})

handlers.sqlHandler.populate({force: true})
