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
    NaN : Refer it to as an Invalid number
*/
var myAge = Number(0o46);
myAge;
// Output : 38
var myNextAge = Number("39");
myNextAge;
// Output : 39
var myCatsAge = Number("n/a");
myCatsAge;
// Output : NaN
myAge - "something";
// Output : NaN
myCatsAge === myCatsAge;
// Output : false (because NaN's are not equal to each other as per IEEE)
// Someway to determine if the value is in fact NaN, JS has a utility called isNaN
isNaN(myAge);
// Output : false
isNaN(myCatsAge);
// Output : true
isNaN("something"); // coerce the string inside to a number before checking for them to be NaN
// Output : true
