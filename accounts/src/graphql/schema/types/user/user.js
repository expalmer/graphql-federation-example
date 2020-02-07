import { gql } from 'apollo-server-fastify'

const User = gql`
  type User @key(fields: "id"){
    id: ID!
    username: String!
    colors: [Color]
    age: Int!
  }
`

export const resolver = {
  User: {
    __resolveReference: async (user, { dataSources }) => {
      const a = await dataSources.usersDataSource.getById(user.id)
      console.log('User.__resolveReference', user, a)
      return a
    },
    colors: async (item, __, { dataSources }) => {
      console.log('User.colors', item)
      return dataSources.colorsDataSource.getAllByUserId(item.id)
    },
    username: (user,  __, { dataSources }) => {
      console.log('User.username', user)
      return `${user.username}!!!`
    }
  }
}

export default [User]