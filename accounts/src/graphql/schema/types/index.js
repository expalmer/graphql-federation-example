import User, { resolvers as userResolver } from './user'
import Color, { resolvers as colorResolver } from './color'

export const resolvers = {
  ...userResolver,
  ...colorResolver,
}

export default [
  ...User,
  ...Color,
]