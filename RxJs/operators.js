const { timer } = require("rxjs");

const observable = new timer(0, 1000);

const subscription = observable.subscribe(console.log);
