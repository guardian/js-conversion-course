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

console.log(youNeverEvenDefinedMe === undefined);
