const jsonAPI = require('jsonapi-server')
const SQLHandler = require('../handlers/SQLHandler')
const Joi = jsonAPI.Joi

const handler = SQLHandler.createHandler()

exports.resource = jsonAPI.define({
  namespace: 'json:api',
  resource: 'users',
  handlers: handler,
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

handler.populate({force: true})
