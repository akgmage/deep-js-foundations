// The reduce() method reduces an array of values down to just one value
// To get the output value, it runs a reducer function on each element of the array
const numbers = [1, 2, 3, 4, 10];
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum);
