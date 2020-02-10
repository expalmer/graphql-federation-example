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
      console.log('user===', user)
      const a = await dataSources.usersDataSource.getById(user.id)
      console.log('resolver User.__resolveReference', user, a)
      return a
    },
    colors: async (item, __, { dataSources }) => {
      console.log('resolver User.colors', item)
      return dataSources.colorsDataSource.getAllByUserId(item.id)
    },
    username: (user,  __, { dataSources }) => {
      console.log('resolver User.username', user)
      return `${user.username}!!!`
    },
    age: (user) => {
      console.log('resolver User.age', user)
      return 23
    }

  }
}

export default [User]