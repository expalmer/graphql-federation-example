import { gql } from 'apollo-server-fastify'

const Product = gql`
  type Product @key(fields: "upc") {
    upc: String!
    name: String!
    price: Int!
    total: Int
  }
`

export const resolver = { 
  Product: {
    __resolveReference: async (item, { dataSources }) => {
      console.log('Product.__resolveReference', item)
      return {}
    },
    total:  async (args, {}, { dataSources }) => {
      console.log('Product.total', 1)
      return 0;
    },
    name: async (args, {}, { dataSources }) => {
      const { __typename, upc, name } = args
      if (name) {
        // console.log('name')
        return name
      }
      console.log('name fromDB')
      const { name: n } = await dataSources.productsDataSource.getOne(upc)
      return n
    },
    price: async ({ __typename, upc, price }, {}, { dataSources }) => {
      if (price) {
        // console.log('price')
        return price
      }
      // console.log('price fromDB')
      const { price: p } = await dataSources.productsDataSource.getOne(upc)
      return p
    }
  }
}

export default [Product]