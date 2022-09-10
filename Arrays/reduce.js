// The reduce() method reduces an array of values down to just one value
// To get the output value, it runs a reducer function on each element of the array
const numbers = [1, 2, 3, 4, 10];
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum);

// Transform an array of strings into a single object that shows how many times each string appears in the array
var pets = ["dogs", "cats", "dogs", "cats", "monkey", "cow", "chicken"];
const petCounts = pets.reduce(function (obj, pet) {
  if (!obj[pet]) {
    obj[pet] = 1;
  } else {
    obj[pet]++;
  }
  return obj;
}, {});
console.log(petCounts);

const pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  },
];
const totalYears = pilots.reduce((value, pilot) => value + pilot.years, 0);

console.log(totalYears);

const original = [1, 2, 3, 4, 5];
const newArr = original.reduce((accumulator, value, index) => {
  console.log(accumulator, index, value);
  accumulator[index] = value * 3;
  return accumulator;
}, []);
console.log(newArr);

const arr = ["z", "x", "c", "v", "b"];
const obj = arr.reduce((accumulator, value) => {
  accumulator[value] = true;
  return accumulator;
}, {});
console.log(obj);

let shoppingCart = [
  {
    product: "phone",
    qty: 1,
    price: 500,
  },
  {
    product: "Screen Protector",
    qty: 1,
    price: 10,
  },
  {
    product: "Memory Card",
    qty: 2,
    price: 20,
  },
];

const totalPrice = shoppingCart.reduce(
  (accumulator, value) => accumulator + value.qty * value.price,
  0
);
console.log(totalPrice);

// calculate total for items
const items = [
  { description: "Potato", quantity: 1, price: 3, total: 34 },
  { description: "Tomato", quantity: 0.5, price: 5, total: 222 },
  { description: "Onion", quantity: 2, price: 6, total: 43 },
];

const total = items.reduce((acc, item) => item.total + acc, 0);
console.log(total);
