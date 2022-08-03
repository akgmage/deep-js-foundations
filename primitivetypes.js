// typeof operator
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
