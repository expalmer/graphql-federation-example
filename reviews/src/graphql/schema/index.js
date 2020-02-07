import { gql } from 'apollo-server-fastify'

const Review = gql`
  type Review {
    body: String
    author: User @provides(fields: "username")
    product: Product
  }

  extend type User @key(fields: "id") {
    id: ID! @external
    username: String! @external
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
    username: (a) => {
      return "nao sei porque"
    }
  },
  Review: {
    author(review, {}, { dataSources }) {
      console.log('review --->', review)
      return { __typename: "User", id: review.authorID };
    }
  },
  Product: {
    reviews: async(review, {}, { dataSources }) => {
      // console.log('Product.reviews', review)
      const { upc } = review
      const data = await dataSources.reviewsDataSource.getAllByProductUPC(upc)
      // console.log(data)
            return data
    }
  }
}

export default [
  Review
]

