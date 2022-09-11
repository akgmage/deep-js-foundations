const { Observable } = require("rxjs");

const observable = new Observable((subscriber) => {
  const id = setInterval(() => {
    subscriber.next("test");
    console.log("leak");
  }, 1000);
  subscriber.complete();
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
