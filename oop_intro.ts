type Product = {
  name: string;
  price: number;
};

class WorkPlace {
  private address: string;
  private type: string;
  private products: Product[];

  constructor(address: string, type: string, products: Product[]) {
    this.address = address;
    this.type = type;
    this.products = products;
  }
}

const bakery = {
  address: "Avenue of Oranges, 1320 - Block D",
  type: "food",
  products: [
    { name: "bread", price: 0.9 },
    { name: "cake", price: 2.5 },
    { name: "milk", price: 1.0 },
    { name: "candies", price: 0.1 },
    { name: "brigadeiro", price: -20 },
  ],

  returnProductName() {
    return this.products.map((product) => product.name);
  },
};

//console.log(bakery);
console.log(bakery.returnProductName());
