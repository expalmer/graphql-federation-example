import { ProductsRepository } from '../../repositories'

export default () => ({
  productsDataSource: new ProductsRepository(),
})
