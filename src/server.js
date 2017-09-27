const apiServer = require('./api')
const swaggerUi = require('swagger-ui-express')
const graphiql = require('express-graphiql-toolbox')

apiServer.expressServer.use('/docs', swaggerUi.serve,
  swaggerUi.setup(
    null, true, null, null, null,
    '/api/swagger.json', 'qBounty API Docs'
  )
)
apiServer.expressServer.use('/graphiql', graphiql({endpoint: '/api/'}))
apiServer.start()
