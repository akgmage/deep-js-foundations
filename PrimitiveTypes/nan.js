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
Number.isNaN(myCatsAge);
// Output : true
Number.isNaN("something");
// Output : false
