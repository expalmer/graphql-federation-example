import { ApolloServer } from 'apollo-server-fastify'
import { buildFederatedSchema } from '@apollo/federation'

import dataSources from './data-sources'
import typeDefs, { resolvers } from '../schema'

export default async() => {
  const server = new ApolloServer({
    schema: buildFederatedSchema({
      typeDefs,
      resolvers,
    }),
    dataSources,
    playground: true
  })
  return server.createHandler()
}
