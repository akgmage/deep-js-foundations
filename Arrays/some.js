// The some() method tests whether at least one element in the array passes the test implemented by the provided function
const hasNegativeNumbers = [1, 2, 3, 1, 4].some((item) => item < 0);
console.log(hasNegativeNumbers);

// check if any number in the marks array is in the range of (8, 10)
const marks = [4, 5, 7, 9, 10, 2];

const range = {
  min: 8,
  max: 10,
};

const result = marks.some(function (item) {
  return item >= this.min && item <= this.max;
}, range);
console.log(result);
