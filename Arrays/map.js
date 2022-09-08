const { elementAt } = require("rxjs");

// The map() method is used for creating a new array from an existing one
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((x) => x * 2);
console.log(doubled);

const users = [
  { firstName: "Tipu", lastName: "To" },
  { firstName: "Sultan", lastName: "Long" },
  { firstName: "Bhagat", lastName: "White" },
  { firstName: "Singh", lastName: "Red" },
  { firstName: "Jai", lastName: "Blue" },
];
const concatNames = users.map((item) => `${item.firstName} ${item.lastName}`);
console.log(concatNames);

const arr = [1, 2, 3, 4, 5];
arr.map((item, index, array) => {
  console.log(item, index, array);
  return item;
});

// Re-format birthdays
const bdays = ["12-12", "11-11", "01-01", "02-02"];
const newBdays = bdays.map((item) => item.replace("-", "/"));
console.log(newBdays);
