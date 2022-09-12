const { of, from, fromEvent } = require("rxjs");
const { map, pluck } = require("rxjs/operators");

const observable = fromEvent(document, "keydown").pipe(pluck("code"));

const subscription = observable.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log("completed");
  },
});

console.log("hello");
