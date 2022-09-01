// The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
const objects = [{ id: "a" }, { id: "b" }, { id: "c" }];
const foundIndex = objects.findIndex((item) => item.id === "c");
console.log(foundIndex);

// return the index of the first occurrence of the number 8 in the ranks array
const ranks = [1, 5, 7, 8, 10, 7];
const index = ranks.findIndex((rank) => rank === 8);
console.log(index);
// get the index of the first occurrence of the number 7 after the index 2 in the ranks array
const ranks2 = [1, 5, 7, 8, 10, 7];
const newIndex = ranks2.findIndex((rank, index) => rank === 7 && index > 2);
console.log(newIndex);

const products = [
  { name: "Phone", price: 999 },
  { name: "Computer", price: 1999 },
  { name: "Tablet", price: 995 },
];
// find the index of the first product whose price is greater than 998
const indexOfProduct = products.findIndex((product) => product.price > 998);
console.log(indexOfProduct);
