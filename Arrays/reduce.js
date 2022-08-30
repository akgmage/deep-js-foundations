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
