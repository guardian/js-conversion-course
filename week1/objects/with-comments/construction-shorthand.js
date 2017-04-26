const a = 'foo';
const b = 'bar';
const c = 'baz';

// shorthand way of constructing an object whose property names
// match predefined const / let names

const doo = { a, b, c };

console.log(doo);

// deconstruct an object into consts whose names correspond to
// the objects property names

const qux = {
    day: 'Thursday',
    year: 2017
};

const { day, year } = qux;

console.log(day);
console.log(year);
