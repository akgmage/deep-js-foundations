const { Observable } = require("rxjs");

const observable = new Observable((subscriber) => {
  // log a message every second
  const id = setInterval(() => {
    subscriber.next("test");
    console.log("leak");
  }, 1000);
  // clear interval to prevent memory leak
  return () => {
    clearInterval(id);
  };
});

const subscription = observable.subscribe({
  next: (value) => {
    console.log(value);
  },
  error: (err) => {
    console.log(err);
  },
  complete: () => console.log("Completed"),
});
// unsubscribe to subscription object after 4 seconds
setTimeout(() => {
  subscription.unsubscribe();
}, 4000);
