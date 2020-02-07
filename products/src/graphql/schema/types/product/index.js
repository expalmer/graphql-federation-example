import Products, { resolver as productsResolver } from './product'

export const resolvers = {
  ...productsResolver,
}

export default [
  ...Products,
]
