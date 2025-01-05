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
