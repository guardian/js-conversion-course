const obj = {
    a: 'hello',
    b: 'world'
};

console.log('Dot notation: ' + obj.a);
console.log('Square bracket notation: ' + obj['a']);

obj.c = 'foo';

console.log('Assignment: ' + obj.c);

obj['c'] = 'bar';

console.log('Reassignment: ' + obj.c);

console.log('========');
console.log('Enumerating keys:');

const keys = Object.keys(obj);

for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
}

console.log('========');
console.log('Looping over properties:');

for (let prop in obj) {
    console.log(prop + ': ' + obj[prop]);
}
