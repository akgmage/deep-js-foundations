const { interval } = require("rxjs");
const { reduce, take, scan } = require("rxjs/operators");

// Emit numbers in sequence based on provided timeframe
const observable = interval(500).pipe(
  //Emit provided number of values before completing.
  take(10),
  // Reduce over time
  scan((acc, item) => acc + item, 0)
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
