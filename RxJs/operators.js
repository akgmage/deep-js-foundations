const { timer } = require("rxjs");

// After given duration, emit numbers in sequence every specified duration

const observable = new timer(0, 1000);

const subscription = observable.subscribe(console.log);
