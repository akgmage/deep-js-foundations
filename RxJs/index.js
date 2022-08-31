//An Observable is a lazily evaluated computation that can synchronously or asynchronously return zero to (potentially) infinite values from the time it's invoked onwards.
const { Observable } = require("rxjs");
const { map } = require("rxjs/operators");
const users = {
  data: [
    { status: "active", age: 14 },
    { status: "active", age: 13 },
    { status: "inactive", age: 17 },
    { status: "active", age: 44 },
    { status: "inactive", age: 11 },
    { status: "inactive", age: 78 },
  ],
};
// Emit value of 10 from observable and send it to pipe
const observable = new Observable((subscriber) => {
  subscriber.next(users);
  subscriber.complete();
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
    return value.reduce((sum, user) => sum + user.age, 0) / value.length;
  }),
  map((value) => {
    console.log("4) got data from third operator", value);
    if (value < 18) throw new Error("Average is below 18");
    else return value;
  })
);
// An Observer is a consumer of values delivered by an Observable
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
