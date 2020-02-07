import { gql } from 'apollo-server-fastify'

const User = gql`
  type User @key(fields: "id"){
    id: ID!,
    username: String!,
    colors: [Color]
  }
`

export const resolver = {
  User: {
    colors: async (item, __, { dataSources }) => {
      console.log('User.colors', item)
      return dataSources.colorsDataSource.getAllByUserId(item.id)
    }
  }
}

export default [User]