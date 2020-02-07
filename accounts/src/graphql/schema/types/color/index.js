import Color, { resolver as colorResolver } from './Color'

export const resolvers = {
  ...colorResolver,
}

export default [
  ...Color,
]
