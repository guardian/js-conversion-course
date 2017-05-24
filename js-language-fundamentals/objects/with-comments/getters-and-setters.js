const obj = {
    a: 'hello',
    b: 'world'
};

// There are two ways to directly access properties on an object

// 1) dot notation (if property name is known)
console.log('Dot notation: ' + obj.a);

// 2) square bracket notation (to dynamically access property)
console.log('Square bracket notation: ' + obj['a']);

// Dynamic access example:
function getProperty(name) {
    return obj[name];
}

console.log('Dynamic access example: ' + getProperty('a'));

// You can assign (and reassign) properties in the same way:

obj.c = 'foo';

console.log('Assignment: ' + obj.c);

obj['c'] = 'bar';

console.log('Reassignment: ' + obj.c);

console.log('========');

// Enumerating property names

console.log('Enumerating keys:');

const keys = Object.keys(obj);

for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
}

console.log('========');

// Looping over properties

console.log('Looping over properties:');

for (let prop in obj) {
    console.log(prop + ': ' + obj[prop]);
}
