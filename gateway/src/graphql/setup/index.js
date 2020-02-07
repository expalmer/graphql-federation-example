import { ApolloServer } from 'apollo-server-fastify'
import { ApolloGateway } from '@apollo/gateway'

export default async() => {
  const gateway = new ApolloGateway({
    serviceList: [
      { name: 'accounts', url: 'http://localhost:3000/graphql' },
      { name: 'products', url: 'http://localhost:3001/graphql' },
      { name: 'reviews', url: 'http://localhost:3002/graphql' }
    ]
  })

  const server = new ApolloServer({ gateway, subscriptions: false })

  return server.createHandler()
}
