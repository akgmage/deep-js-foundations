const { of, from, fromEvent } = require("rxjs");
const { map, pluck, filter } = require("rxjs/operators");

const observable = fromEvent(document, "keydown").pipe(
  pluck("code"),
  filter((code) => code === "Space")
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
