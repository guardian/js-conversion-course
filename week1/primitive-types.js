//
// Boolean
//
// Has exactly two values
var x = true;
var y = false;

// Truthy & falsy
// In a context where a boolean is expected (e.g. an if statement) JS will type coerce to Boolean
// It does this by considering these false:
if (0) { console.log("ain't gonna happen") }
if ('') { console.log("ain't gonna happen") }
if (null) { console.log("ain't gonna happen") }
if (undefined) { console.log("ain't gonna happen") }
if (NaN) { console.log("ain't gonna happen") }

// and obviously
if (false) { console.log("ain't gonna happen") }

// Everything else is truthy
if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)

// You can force this type coercion in other contexts by doing !!
function isNonZero(x) {
	return !!x;
}

//
// Null
//
// Has one value
var x = null;

//
// Undefined
//
// Has one value
var x;
console.log(x === undefined);

function(y) {
	console.log(y === undefined);
}

var obj = {};
console.log(obj.youHaveNotSetMeYet === undefined);

// But beware!
console.log(youNeverEvenDefinedMe === undefined);


//
// Number, String
//

// These have methods

(3.4393).toFixed(2);

var fourDecimalPlaces = 3.4393;
fourDecimalPlaces.toFixed(2);

// immutable
console.log(fourDecimalPlaces);

// String
var h = 'hello';
h.slice(2);

// immutable
console.log(h);


// Symbol (new in ES6)