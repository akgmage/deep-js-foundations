const { interval } = require("rxjs");
const { reduce, take } = require("rxjs/operators");

const observable = interval(500).pipe(
  //Emit provided number of values before completing.
  take(10),
  reduce((acc, item) => acc + item, 0)
);

const subscription = observable.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log("completed");
  },
});

console.log("hello");
