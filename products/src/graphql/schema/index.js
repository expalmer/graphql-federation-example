import { gql } from 'apollo-server-fastify'

import Types, { resolvers as typesResolvers } from './types'

const Query = gql`
  type Query {
    topProducts(first: Int = 5): [Product]
    oneProduct(upc: String): Product
  }
`

const SchemaDefinition = gql`
  schema {
    query: Query,
  }
`

export const resolvers = {
  Query: {
    topProducts: (root, { first }, { dataSources }) => {
      return dataSources.productsDataSource.getAll(first)
    },
    oneProduct: (root, { upc }, { dataSources }) => {
      return dataSources.productsDataSource.getOne(upc)
    }
  },
  ...typesResolvers
}

export default [
  ...Types,
  Query,
  SchemaDefinition,
]

