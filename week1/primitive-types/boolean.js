// Has exactly two values
var x = true;
var y = false;

// Does have an object wrapper but let's not worry too much about that
// (it's not useful and has some bizarre properties)

// But you can see it if you try:
// (all objects have a toString() method)
true.toString();
// vs
null.toString();


// Truthy & falsy
// In a context where a boolean is expected (e.g. an if statement) JS will type coerce to Boolean
// It does this by considering these false:
if (0) {
    console.log("ain't gonna happen")
}
if ('') {
    console.log("ain't gonna happen")
}
if (null) {
    console.log("ain't gonna happen")
}
if (undefined) {
    console.log("ain't gonna happen")
}
if (NaN) {
    console.log("ain't gonna happen")
}

// Everything else is truthy
if (true) {
}
if ({}) {
}
if ([]) {
}
if (42) {
}
if ("foo") {
}
if (new Date()) {
}
if (-42) {
}
if (3.14) {
}
if (-3.14) {
}
if (Infinity) {
}
if (-Infinity) {
}

// TASK: write a function which converts any value to a Boolean
// For bonus points, do it without an if statement
