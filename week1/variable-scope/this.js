function f(y) {
  return this.x * y;
}

function g() {
  this.x = 5;
  return f(100);
}

console.log(f()); 
console.log(g()); 


const mult5 = f.bind({ x: 5 }); 

console.log(mult5(2));

const h = f.bind({ x: 5 }, 10);

console.log(h()); 

console.log(f.call({ x: 5 }, 3)); 

console.log(f.apply({ x: 5 }, [4]));
