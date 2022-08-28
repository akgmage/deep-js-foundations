const { Observable } = require("rxjs");

const observable = new Observable((subscriber) => {
  subscriber.next(10);
});
