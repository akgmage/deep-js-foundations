const nested = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const flatten = nested.reduce((accumulator, item) => {
  console.log(accumulator, item);
  return [...accumulator, ...item];
}, []);
console.log(flatten);
