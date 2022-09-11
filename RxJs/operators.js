const { timer } = require("rxjs");

// After given duration, emit numbers in sequence every specified duration
/*
 * timer takes a second argument, how often to emit subsequent values
 * in this case we will emit first value after 4 second and subsequent
 * values every 1 seconds after
 */
const observable = new timer(4000, 1000);

const subscription = observable.subscribe(console.log);
