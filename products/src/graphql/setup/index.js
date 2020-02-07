import { ApolloServer } from 'apollo-server-fastify'
import { buildFederatedSchema } from '@apollo/federation'
import typeDefs, { resolvers } from '../schema'
import dataSources from './data-sources' 

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
