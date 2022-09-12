const { from } = require("rxjs");

// Turn an array, promise, or iterable into an observable.
const observable = from([1, 2, 3, 4, 5]);

const subscription = observable.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log("completed");
  },
});

console.log("hello");
