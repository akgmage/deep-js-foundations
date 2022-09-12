const { fromEvent } = require("rxjs");

// //create observable that emits click events
const observable = fromEvent(document, "click");

const subscription = observable.subscribe(console.log);
