type Products = {
  name: string;
  price: number;
};

class WorkPlace {
  private waitingList: number;
  constructor(
    private address: string,
    private ramal: string,
    private products: Products[],
    waitingList?: number,
  ) {
    this.waitingList = waitingList ?? 0;
  }

  returnProductName() {
    return this.products.map((product) => product.name);
  }

  attendList() {
    if (this.waitingList === 0) {
      console.log("The line is empty");
      return;
    }

    this.waitingList -= 1;
  }

  showHowManyAreInAwaitList() {
    return this.waitingList;
  }
}

//const bakery = {
//  address: "Avenue of Oranges, 1320 - Block D",
//  type: "food",
//  products: [
//    { name: "bread", price: 0.9 },
//    { name: "cake", price: 2.5 },
//    { name: "milk", price: 1.0 },
//    { name: "candies", price: 0.1 },
//    { name: "brigadeiro", price: -20 },
//  ],
//
//  returnProductName() {
//    return this.products.map((product) => product.name);
//  },
//};
//console.log(bakery);

const bakeryOfOranges = new WorkPlace(
  "Avenue of Oranges, 1234 - Block D",
  "Food",
  [
    { name: "Cake", price: 2.5 },
    { name: "Bread", price: 0.9 },
    { name: "Milk", price: 5.25 },
    { name: "Candies", price: 0.15 },
  ],
  10,
);

console.log(bakeryOfOranges);
console.log(bakeryOfOranges.returnProductName());
bakeryOfOranges.attendList();
bakeryOfOranges.attendList();
bakeryOfOranges.attendList();
bakeryOfOranges.attendList();
console.log(bakeryOfOranges.showHowManyAreInAwaitList());
