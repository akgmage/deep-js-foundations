const { Observable } = require("rxjs");

const observable = new Observable((subscriber) => {
  subscriber.next("Hello World");
});
observable.subscribe({
  next: (value) => {
    console.log(value);
  },
});
