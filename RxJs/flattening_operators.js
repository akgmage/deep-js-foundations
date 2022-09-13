const { fromEvent } = require("rxjs");
const { map, mergeMap } = require("rxjs/operators");
const { ajax } = require("rxjs/ajax");
// Emit numbers in sequence based on provided timeframe
const observable = fromEvent(button, "click").pipe(
  // Map to observable, emit value
  mergeMap(() => {
    // Create an observable for an Ajax request with either a request object with url, headers, etc or a string for a URL.
    return ajax.getJSON("https://jsonplaceholder.typicode.com/todos/1");
  })
);

const subscription = observable.subscribe({
  next(value) {
    // receive response from second observable
    console.log(value);
  },
  complete() {
    console.log("completed");
  },
});

console.log("hello");
