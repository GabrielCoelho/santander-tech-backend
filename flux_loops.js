const numberList = [25, 88, 61, 123, 143, 232, 10, 11, 52];
const listOdd = [];
const listEven = [];

let counter = 0;

while (counter < numberList.length) {
  console.log(numberList[counter]);
  numberList[counter] % 2 === 0
    ? listEven.push(numberList[counter])
    : listOdd.push(numberList[counter]);

  counter += 1;
}

console.log("Even list:");
counter = 0;
while (counter < listEven.length) {
  console.log(listEven[counter]);
  counter += 1;
}
console.log("Odd list:");
counter = 0;
while (counter < listOdd.length) {
  console.log(listOdd[counter]);
  counter += 1;
}
