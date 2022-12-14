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
