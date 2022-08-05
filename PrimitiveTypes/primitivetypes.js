/* 
    typeof operator : It is the only operator in existence that is able to reference
    a thing that doesn't exist and not throw an error.
*/
var v;
typeof v;
// Output : 'undefined'
v = "1";
typeof v;
// Output : 'string'
v = 2;
typeof v;
// Output : 'number'
v = true;
typeof v;
// Output : 'boolean'
v = {};
typeof v;
// Output : 'object'
v = Symbol();
typeof v;
// Output : 'symbol'
typeof doesntExist;
// Output : 'undefined'
var v = null;
typeof v;
// Output : 'object'
v = function () {};
typeof v;
// Output : 'function'
v = [1, 2, 3];
typeof v;
// Output : 'object'
var v = 42n;
typeof v;
// Output : 'bigint'

/* 
    Undefined vs undeclared vs uninitialized
    Undeclared : Its never been created in any scope that we have access to
    Undefined : There's definitely a variable and at the moment it has no value
    Uninitialized: Variable can be in (TDZ) Temporal Dead Zone
*/

/*
    Special values: -0    
*/
var trendRate = -0;
trendRate === -0;
// Output : true
trendRate.toString();
// Output : '0'
trendRate === 0;
// Output : true
trendRate < 0;
// Output : false
trendRate > 0;
// Output : false

Object.is(trendRate, -0);
// Output : true
Object.is(trendRate, 0);
// Output : false

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
