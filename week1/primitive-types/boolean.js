var x = true;
var y = false;

true.toString();

null.toString();


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
    console.log("ain't that the truth")
}
if ({}) {
    console.log("ain't that the truth")
}
if ([]) {
    console.log("ain't that the truth")
}
if (42) {
    console.log("ain't that the truth")
}
if ("foo") {
    console.log("ain't that the truth")
}
if (new Date()) {
    console.log("ain't that the truth")
}
if (-42) {
    console.log("ain't that the truth")
}
if (3.14) {
    console.log("ain't that the truth")
}
if (-3.14) {
    console.log("ain't that the truth")
}
if (Infinity) {
    console.log("ain't that the truth")
}
if (-Infinity) {
    console.log("ain't that the truth")
}
