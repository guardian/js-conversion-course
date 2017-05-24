// Like Unit in Scala
// Has ONE value
var x;
console.log(x === undefined);

function f(y) {
    console.log(y === undefined);
}

f();

function noop() { }

var z = noop();
console.log(`z is undefined: ${z === undefined}`);
console.log(`z is null: ${z === null}`);

var obj = {};
console.log(obj.youHaveNotSetMeYet === undefined);

// But beware!
console.log(youNeverEvenDefinedMe === undefined);

// Weird caveats: in ES5 you could redefine undefined, believe it or not
// Not possible in ES6 so above comparisons are OK

// and try with typeof
