export default class Users {
  constructor() {
    this.users = [
      { id: 1, username: 'Palmer' },
      { id: 2, username: 'Denise' },
    ]
  }
  async getById(id) {
    const a = this.users.find(i => +i.id === +id)
    return { ...a }
  }

  async getAll() {
    return this.users
  }
}