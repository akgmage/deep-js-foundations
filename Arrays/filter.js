// The filter() method takes each element in an array and it applies a conditional statement against it.
//If this conditional returns true, the element gets pushed to the output array.
const numbers = [1, 2, 3, 5, 5, 8, 8, 10, 4];
const evens = numbers.filter((x) => !(x & 1));
console.log(evens);

const students = [
  { name: "Quincy", grade: 96 },
  { name: "Lorem", grade: 84 },
  { name: "Ipsum", grade: 99 },
  { name: "Ador", grade: 66 },
  { name: "Amat", grade: 76 },
];
const studentGrades = students.filter((x) => x.grade > 83);
console.log(studentGrades);

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const wordsLessThan5 = words.filter((x) => x.length < 6);
console.log(wordsLessThan5);

const nums = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
const negativeNums = nums.filter((x) => x < 0);
console.log(negativeNums);
