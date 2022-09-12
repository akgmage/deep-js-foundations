const { of } = require("rxjs");
const { reduce } = require("rxjs/operators");

const observable = of(1, 2, 3, 4, 5).pipe(reduce((acc, item) => acc + item, 0));

const subscription = observable.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log("completed");
  },
});

console.log("hello");
