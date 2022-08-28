const { Observable } = require("rxjs");

const observable = new Observable((subscriber) => {
  subscriber.next(10);
});
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
