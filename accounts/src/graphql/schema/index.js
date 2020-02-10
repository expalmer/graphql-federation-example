import { gql } from 'apollo-server-fastify'

import Types, { resolvers as typesResolvers } from './types'

const Query = gql`

  extend type Product @key(fields: "upc") {
    upc: String! @external
  }

  type Cart {
    id: ID!
    user: User
    products: [Product]
  }

  type Query {
    me(id: ID!): User
    cart(id: ID!): Cart
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
      return data
    },
    cart: async (root, { id }, { dataSources }) => {
      const user = await dataSources.usersDataSource.getById(id)
      return { user, id: 1 }
    }
  },
  Cart: {
    products: async (user, { id }, { dataSources }) => {
      console.log('user', user)
      return [{ __typename: 'Product', upc: 1 }, { __typename: 'Product', upc: 2 }];
    }
  },
  ...typesResolvers
}

export default [
  ...Types,
  Query,
  SchemaDefinition,
]

