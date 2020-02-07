export default class Reviews {
  constructor() {
    this.data = [
      {
        id: "1",
        authorID: "1",
        product: { upc: "1" },
        body: "Love it!"
      },
      {
        id: "2",
        authorID: "1",
        product: { upc: "2" },
        body: "Too expensive."
      },
      {
        id: "3",
        authorID: "2",
        product: { upc: "3" },
        body: "Could be better."
      },
      {
        id: "4",
        authorID: "2",
        product: { upc: "1" },
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