export default class Colors {
  constructor() {
    this.colors = [
      { id: 1, name: 'Red' },
      { id: 2, name: 'Blue' },
      { id: 3, name: 'Yellow' },
      { id: 4, name: 'Green' },
    ]

    this.colorsByUser = [
      {
        userId: 1,
        colorId: 1,
      },
      {
        userId: 1,
        colorId: 2,
      },
      {
        userId: 1,
        colorId: 3,
      },
      {
        userId: 2,
        colorId: 1,
      },
      {
        userId: 2,
        colorId: 3,
      },
    ]
  }

  async getById(id) {
    return this.colors.find(i => +i.id === +id)
  }

  async getAllByUserId(userId) {
    const ids = this.colorsByUser
      .filter(i => +i.userId === +userId)
      .map(i => i.colorId)
    return this.colors.filter(i => ids.includes(i.id))
  }
}