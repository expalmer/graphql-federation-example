export default class Reviews {
  constructor() {
    this.data = [
      {
        id: "1",
        authorID: "1",
        product: { upc: "1", name: "a" },
        body: "Love it!"
      },
      {
        id: "2",
        authorID: "1",
        product: { upc: "2", name: "b" },
        body: "Too expensive."
      },
      {
        id: "3",
        authorID: "2",
        product: { upc: "3", name: "c" },
        body: "Could be better."
      },
      {
        id: "4",
        authorID: "2",
        product: { upc: "1", name: "d" },
        body: "Prefer something else."
      }
    ]
  }

  async getAllByAuthorID(authorID) {
    return this.data.filter(i => String(i.authorID) === String(authorID))
  }

  async getAllByProductUPC(upc) {
    return this.data.filter(i => String(i.product.upc) === String(upc))
  }

}