Math.sign(-3);
// Output : -1
Math.sign(3);
// Output : 1
Math.sign(-0);
// Output : -0
Math.sign(0);
// Output : 0

function sign(v) {
  return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1;
}
sign(-3);
// Output : -1
sign(3);
// Output : 1
sign(-0);
// Output : -1
sign(0);
// Output : 1
