import { gql } from 'apollo-server-fastify'

const Review = gql`
  type Review {
    body: String
    authorId: ID!
    author: User @provides(fields: "age")
    product: Product
  }

  extend type User @key(fields: "id") {
    id: ID! @external
    age: Int! @external
    reviews: [Review]
  }

  extend type Product @key(fields: "upc") {
    upc: String! @external
    reviews: [Review] 
  }
`

export const resolvers = {
  User: {
    reviews: async(user, {}, { dataSources }) => {
      const data = await dataSources.reviewsDataSource.getAllByAuthorID(user.id)
      console.log('User.reviews', data)
      return data
    },
    age: async(user) => {
      // console.log('User.age', user)
      return 1
    }
  },
  Review: {
    author(review, {}, { dataSources }) {
      return { __typename: 'User', id: review.authorID };
    },
    product(review) {
      console.log('=====================')
      return { __typename: 'Product', upc: review.product.upc };
    }
    // ,
    // product(review, {}, { dataSources }) {
    //   console.log('======')
    //   return { __typename: 'Product', upc: review.product.upc };
    // }
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
