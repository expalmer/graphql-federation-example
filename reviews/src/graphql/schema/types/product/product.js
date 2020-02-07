import { gql } from 'apollo-server-fastify'

const Product = gql`
  type Product @key(fields: "upc") {
    upc: String!
    name: String!
    price: Int
  }
`

export const resolver = {}

export default [Product]