export default class Products {
  constructor() {
    this.products = [
      { upc: "1", name: 'Guitar', price: 1 , total: 123 },
      { upc: "2", name: 'Shoes', price: 140 , total: 123 },
      { upc: "3", name: 'T-Shirt', price: 70 , total: 123 },
      { upc: "4", name: 'Coin', price: 30 , total: 123 },
    ]
  }

  async getAll() {
    return this.products
  }

  async getOne(upc) {
    return this.products.find(i => i.upc === upc)
  }

}