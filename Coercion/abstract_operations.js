// ToPrimitive(hint)

// hint: "number"
// invoke valueOf() and see what it gives us, if it gives primitive , then we're done
// if it doesn't give us a primitive or it doesn't exist, then we try the toString()
// toString()

// hint: "string"
// toString()
// valueOf()

// ToString

/**
 * null "null"
 * undefined "undefined"
 * true "true"
 * false "false"
 * 3.14159 "3.14159"
 * 0 "0"
 * -0 "0"
 *
 * ToString (Array)
 * [] ""
 * [1,2,3] "1,2,3"
 * [null, undefined] ","
 * [[[],[],[]],[]] ",,,"
 * [....] "..."
 *
 * ToString (Object)
 * {} "[object Object]"
 * {a:2} "[object Object]"
 * {toString(){return "X";}} "X"
 */

// ToNumber
/**
 * ""   0
 * "0"  0
 * "-0" 0
 * " 009 " 9
 * "3.14.59" 3.14159
 * "0." 0
 * ".0" 0
 * "." NaN
 * "0xaf" 175
 */
