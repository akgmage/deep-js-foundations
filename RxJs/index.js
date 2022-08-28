const { Observable } = require("rxjs");
const users = {
  data: [
    { status: "active", age: 14 },
    { status: "active", age: 13 },
    { status: "inactive", age: 17 },
    { status: "active", age: 32 },
    { status: "inactive", age: 11 },
    { status: "inactive", age: 78 },
  ],
};
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
