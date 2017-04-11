// TASK
// Try to call a method (e.g. toFixed) on a Number literal
// What's the issue?
// How to fix it?

(3.4393).toFixed(2);

var fourDecimalPlaces = 3.4393;
fourDecimalPlaces.toFixed(2);

// immutable
console.log(fourDecimalPlaces);
