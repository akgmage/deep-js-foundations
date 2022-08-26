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
