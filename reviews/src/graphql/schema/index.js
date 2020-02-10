import { gql } from 'apollo-server-fastify'

const Review = gql`
  type Review {
    body: String
    authorId: ID!
    author: User
    product: Product
  }

  extend type User @key(fields: "id") {
    id: ID! @external
    reviews: [Review]
  }

  extend type Product @key(fields: "upc") {
    upc: String! @external
    reviews: [Review] 
  }

  extend type Query {
    all: [User]
  }
`

export const resolvers = {
  Query: {
    all: async(user, {}, { dataSources }) => {
      return [{ id: 1, age: 123 }, { id: 2, age: 432 }]
    }
  },
  User: {
    reviews: async(user, {}, { dataSources }) => {
      const data = await dataSources.reviewsDataSource.getAllByAuthorID(user.id)
      return data
    },
    age: async(user) => {
      console.log('User.age', user)
      return 1
    }
  },
  Review: {
    author(review, {}, { dataSources }) {
      return { __typename: 'User', id: review.authorID };
    },
    product(review) {
      return { __typename: 'Product', upc: review.product.upc };
    }
  },
  Product: {
    reviews: async(review, {}, { dataSources }) => {
      const { upc } = review
      const data = await dataSources.reviewsDataSource.getAllByProductUPC(upc)
      return data
    }
  }
}

export default [
  Review
]
