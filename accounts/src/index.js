import fastify from 'fastify'

import setupGraphql from './graphql/setup'

const app = fastify();

setupGraphql()
  .then(async(serverHandler) => {
    app.register(serverHandler)
    await app.listen(3000)
    console.log('accounts 3000')
  })
