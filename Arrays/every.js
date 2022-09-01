// The every() method tests whether all elements in the array pass the test implemented by the provided function
const allPositive = [1, -2, 3].every((item) => item > 0);
console.log(allPositive);

// test whether all the array elements are the odd numbers
const numbers = [1, 3, 5, 7, 9];
const isOdd = numbers.every((item) => item & 1);
console.log(isOdd);

// test whether all elements in the numbers array is in the range specified by the min and max of the range object
const nums = [1, 3, 15, 7];
const range = { min: 0, max: 10 };
const isInRange = nums.every(function (item) {
  return item >= this.min && item <= this.max;
}, range);
console.log(isInRange);
