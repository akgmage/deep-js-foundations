// Basic closure example
function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    return y;
  }
  return x;
}
//var z = z();
console.log(z, z());
z()()();

function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}
let a = 100;
var close = outest()("hello");
close();

// advantages of closures
// used in module patterns
// data hiding and encapsulation
// setTimeouts
// memoize

function Counter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}
var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();

// disadvantages
// over consumption of memory
// closed over variables are not garbage collected
// can elad to memory leaks if not handled properly

function aa() {
  var x = 0,
    z = 10;
  return function b() {
    console.log(x);
  };
}
var y = aa();
y();
