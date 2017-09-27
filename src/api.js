const debug = require('debug')

const jsonAPI = require('jsonapi-server')

jsonAPI.setConfig({
  graphiql: true,
  jsonapi: true,
  protocol: 'http',
  hostname: 'localhost',
  port: 4455,
  base: 'api',
  meta: {
    description: 'Coding Blocks Question Setter Bounty Board'
  },
  swagger: {
    title: 'Coding Blocks qBounty API',
    version: '0.1.0',
    description: 'Coding Blocks Question Setter Bounty Board',
    contact: {
      name: 'Support',
      email: 'dev@codingblocks.com',
      url: 'http://codingblocks.com'
    },
    license: {
      name: 'MIT',
      url: 'http://opensource.org/licenses/MIT'
    }
  }
})

jsonAPI.authenticate((req, cb) => {
  return cb()
})

jsonAPI.metrics.on('data', data => {
  debug('metrics')(data)
})

require('./resources')

exports.expressServer = jsonAPI.getExpressServer()
exports.start = jsonAPI.start
exports.close = jsonAPI.close
