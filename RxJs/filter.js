const { of, from, fromEvent } = require("rxjs");
const { map, pluck, filter } = require("rxjs/operators");

//emit (3, 6, 8, 9, 12, 55, 57)
const source = from([3, 6, 8, 9, 12, 55, 57]);
//filter out even numbers
const example = source.pipe(filter((num) => num & 1));
const subscribe = example.subscribe((val) => console.log(`Odd number: ${val}`));
