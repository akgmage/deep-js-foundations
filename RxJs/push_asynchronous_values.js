const { Observable } = require("rxjs");

const observable = new Observable((subscriber) => {
  // log a message every second
  const id = setInterval(() => {
    subscriber.next("test");
    console.log("leak");
  }, 1000);
  subscriber.complete();
  // clear interval to prevent memory leak
  return () => {
    clearInterval(id);
  };
});
console.log("before");
observable.subscribe({
  next: (value) => {
    console.log(value);
  },
  error: (err) => {
    console.log(err);
  },
  complete: () => console.log("Completed"),
});
console.log("after");
