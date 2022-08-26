// The some() method tests whether at least one element in the array passes the test implemented by the provided function
const hasNegativeNumbers = [1, 2, -3, 1, 4].some(function (item) {
  return item < 0;
});
console.log(hasNegativeNumbers);
