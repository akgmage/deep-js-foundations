const { Observable } = require("rxjs");

const observable = new Observable((subscriber) => {
  // stream of data
  subscriber.next("Hello World");
  subscriber.next("Hello World 2");
  subscriber.error("Error"); // terminate an observable
  subscriber.complete(); // prevent observable from pushing new data
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
