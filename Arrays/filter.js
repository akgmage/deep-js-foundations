const numbers = [1, 2, 3, 5, 5, 8, 8, 10, 4];
const evens = numbers.filter((x) => !(x & 1));
console.log(evens);
