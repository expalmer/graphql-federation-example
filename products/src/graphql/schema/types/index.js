import Product, { resolvers as productResolver } from './product'

export const resolvers = {
  ...productResolver,
}

export default [
  ...Product,
]