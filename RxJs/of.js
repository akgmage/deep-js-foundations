const { of } = require("rxjs");
// Emit variable amount of values in a sequence and then emits a complete notification
const observable = of([1, 2, 3, 4, 5]);

const subscription = observable.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log("completed");
  },
});

console.log("hello");
