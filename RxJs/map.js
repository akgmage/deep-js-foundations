const { of, from } = require("rxjs");
const { map } = require("rxjs/operators");

// Apply projection with each value from source
const observable = of(1, 2, 3, 4, 5).pipe(map((value) => `$${value}`));

const subscription = observable.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log("completed");
  },
});

console.log("hello");

const dataSource = from([
  { name: "Abhi", age: 20 },
  { name: "John", age: 10 },
  { name: "Dev", age: 45 },
  { name: "Cya", age: 44 },
]);
// grab each persons name
const example = dataSource.pipe(map(({ name }) => name));
const subscribe = example.subscribe((val) => console.log(val));
