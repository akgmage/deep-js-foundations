const { Observable } = require("rxjs");
// Emit value of 10 from observable
const observable = new Observable((subscriber) => {
  subscriber.next(10);
});
// Consume the value provided / delivered by Observable
const observer = {
  next: (value) => {
    console.log("Observer got a value of " + value);
  },
  error: (err) => {
    console.log("Observer got an error of " + err);
  },
  complete: () => {
    console.log("Observer got a complete notification");
  },
};
observable.subscribe(observer);
