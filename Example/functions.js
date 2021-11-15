"use strict";
exports.__esModule = true;
//* Functions
function addNum(x, y) {
    return x + y;
}
var square = function (side) { return side * side; };
// console.log(square(3))
//* Function with default value
var addOptionalValue = function (a, b, c) {
    console.log('sum = ', a + b);
    console.log('c = ', c);
};
// addOptionalValue(1, 3)
//* Function with default value
var addDefault = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log('sum = ', a + b);
    console.log('c = ', c);
};
// addDefault(1, 3)
//* Void
function log(message) {
    console.log(message);
}
/* FUNCTION SIGNATURE  */
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// greet('Thanh', 'hello anh em')
var calculate;
calculate = function (num1, num2, isAdd) { return (isAdd ? (num1 + num2) : (num1 - num2)); };
// console.log(calculate(10, 5, true))
