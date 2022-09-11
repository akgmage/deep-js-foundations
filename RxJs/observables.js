const { Observable } = require("rxjs");

const observable = new Observable((subscriber) => {
  subscriber.next("Hello World");
  subscriber.next("Hello World 2");
  subscriber.complete();
});
observable.subscribe({
  next: (value) => {
    console.log(value);
  },
  error: (err) => {
    console.log(err);
  },
  complete: () => console.log("Completed"),
});
