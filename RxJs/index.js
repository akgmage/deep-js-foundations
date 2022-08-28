const { Observable } = require("rxjs");
const { map } = require("rxjs/operators");
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
// Emit value of 10 from observable and send it to pipe
const observable = new Observable((subscriber) => {
  subscriber.next(users);
}).pipe(
  map((value) => {
    console.log("1)inside of first operator", value);
    return value.data;
  }),
  map((value) => {
    console.log("2)got data from first operator", value);
    return value.filter((user) => user.status === "active");
  }),
  map((value) => {
    console.log("3) got data from second operator", value);
    return value;
  })
);
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
