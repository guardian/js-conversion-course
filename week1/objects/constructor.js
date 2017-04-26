function Developer(name) {
    this.name = name;
    this.drink = 'coffee';
}

const alice = new Developer('Alice');
const mallory = new Developer('Mallory');

console.log('This Developer is called ' + alice.name);

mallory.drink = 'tea';

console.log('Mallory\'s favourite drink is ' + mallory.drink);
console.log('Alice\'s favourite drink is ' + alice.drink);

Developer.prototype.sayHello = function() {
    console.log('Hello, my name is ' + this.name);
};

alice.sayHello();

function JavaScriptDeveloper(name) {
    this.name = name;
}

JavaScriptDeveloper.prototype = Object.create(Developer.prototype);

const bob = new JavaScriptDeveloper('Bob');

console.log('This Developer is called ' + bob.name);
console.log('His favourite drink is ' + bob.drink);

bob.sayHello();

Developer.prototype.sayHello = function() {
    console.log('I am ' + this.name);
};

alice.sayHello();
bob.sayHello();
