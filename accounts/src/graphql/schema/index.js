import { gql } from 'apollo-server-fastify'

import Types, { resolvers as typesResolvers } from './types'

const Query = gql`
  type Query {
    me(id: ID!): User
  }
`

const SchemaDefinition = gql`
  schema {
    query: Query,
  }
`

export const resolvers = {
  Query: {
    me: async (root, { id }, { dataSources }) => {
      const data = await dataSources.usersDataSource.getById(id)
      console.log('Query.me', data)
      return data
    },
  },
  ...typesResolvers
}

export default [
  ...Types,
  Query,
  SchemaDefinition,
]

