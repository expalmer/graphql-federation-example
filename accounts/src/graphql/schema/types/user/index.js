import User, { resolver as userResolver } from './User'

export const resolvers = {
  ...userResolver,
}

export default [
  ...User,
]
