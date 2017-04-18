function f() {
  var x = 1;

  if (true) {
    var x = 10; // this is "hoisted" by the runtime so it's as though
                // it's declared at the top of the function,
                // at the same level as `var x = 1` 
  }

  return x; // returns 10
}


function g() {
  var x = 1;

  if (true) {
    let x = 10; // scoped to the `if` block
    x = x*2;    // this only changes `x` in this scope
  }

  return x; // returns 1
}

function h() {
  var x = 1;

  if (true) {
    const x = 10; // scoped as with `let`
    x = x*2;      // but with `const`, we can't reassign
  }

  return x; // we never get this far, reassigning const throws an exception
}


console.log(f());
console.log(g());
console.log(h());
