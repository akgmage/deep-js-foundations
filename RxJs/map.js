const { of } = require("rxjs");
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
