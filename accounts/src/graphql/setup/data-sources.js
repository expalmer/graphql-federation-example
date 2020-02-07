import { UsersRepository, ColorsRepository } from '../../repositories'

export default () => ({
  usersDataSource: new UsersRepository(),
  colorsDataSource: new ColorsRepository(),
})
