function f() {
  var x = 1;

  if (true) {
    var x = 10;
  }

  return x;
}


function g() {
  var x = 1;

  if (true) {
    let x = 10;
    x = x*2;
  }

  return x;
}

function h() {
  var x = 1;

  if (true) {
    const x = 10;
    x = x*2;    
  }

  return x;
}


console.log(f());
console.log(g());
console.log(h());
