const obj = {
    a: 'hello',
    b: 'world',
    sayHello: function() {
        console.log('Hi, thanks for calling');
    },
    isMonday: false,
    howManyBeans: 5
};

console.log(obj);

obj.sayHello();

// A constructor function is just a normal function
// By convention we capitalise the first character of the name

function Developer(name) {
    // `this` is an empty object that is created implicitly
    this.name = name;
    this.drink = 'coffee';

    // When executed, the function implicitly returns `this`
}

// To use a function as a constructor, call it with the `new` keyword

const alice = new Developer('Alice');

console.log('This Developer is called ' + alice.name);
console.log('Her favourite drink is ' + alice.drink);

// the resulting object behaves just like a normal object, so we can assign / reassign properties

const mallory = new Developer('Mallory');

// We can reassign properties assigned to `this` in the constructor
mallory.drink = 'tea';
console.log('Mallory\'s favourite drink is ' + mallory.drink);

// We can add methods to objects generated by the constructor function
// by extending the constructor's prototype

Developer.prototype.sayHello = function() {
    console.log('Hello, my name is ' + this.name);
};

alice.sayHello();

// We can implement classical inheritance

function JavaScriptDeveloper(name) {
    this.name = name;
}

// Creating the child's prototype based on the parent's prototype

JavaScriptDeveloper.prototype = Object.create(Developer.prototype);

const bob = new JavaScriptDeveloper('Bob');

// We can access the properties assigned to `this` in the constructor
console.log('This Developer is called ' + bob.name);

// But not properties assigned to `this` in the parent's constructor
console.log('His favourite drink is ' + bob.drink);

bob.sayHello();

// If we mutate the parent's prototype, the change will ripple through to the child

Developer.prototype.sayHello = function() {
    console.log('I am ' + this.name);
};

alice.sayHello();
bob.sayHello();
