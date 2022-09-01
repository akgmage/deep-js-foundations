// The every() method tests whether all elements in the array pass the test implemented by the provided function
const allPositive = [1, -2, 3].every((item) => item > 0);
console.log(allPositive);

// test whether all the array elements are the odd numbers
const numbers = [1, 3, 5, 7, 9];
const isOdd = numbers.every((item) => item & 1);
console.log(isOdd);
