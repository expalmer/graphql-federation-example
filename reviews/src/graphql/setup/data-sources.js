import { ReviewsRepository } from '../../repositories'

export default () => ({
  reviewsDataSource: new ReviewsRepository(),
})
