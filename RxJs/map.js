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
const demo = dataSource.pipe(map(({ name }) => name));
const subs = demo.subscribe((val) => console.log(val));

//emit (1,2,3,4,5)
const dataSource2 = from([4, 2, 5, 2, 1]);
//multiply with 3 to each value
const demo2 = dataSource2.pipe(map((val) => val * 3));
//output: 12, 6, 15, 6, 3
const subs2 = demo2.subscribe((val) => console.log(val));
