import fastify from 'fastify'

import setupGraphql from './graphql/setup'

const app = fastify();

setupGraphql()
  .then(async(serverHandler) => {
    app.register(serverHandler)
    await app.listen(3001)
    console.log('products 3001')
  })
