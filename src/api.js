const debug = require('debug')
const config = require('../config')

const jsonAPI = require('jsonapi-server')

jsonAPI.setConfig({
  graphiql: true,
  jsonapi: true,
  protocol: 'http',
  hostname: config.SRV_CONFIG.SRV_HOSTNAME,
  port: config.SRV_CONFIG.SRV_PORT,
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

require('./models/index')

exports.expressServer = jsonAPI.getExpressServer()
exports.start = jsonAPI.start
exports.close = jsonAPI.close
