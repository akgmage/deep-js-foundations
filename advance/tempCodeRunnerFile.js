function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    //let a = 10;
    return inner;
  }
  return outer;
}
let a = 100;
var close = outest()("hello");
close();
