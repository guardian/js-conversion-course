function f(y) {
  return this.x * y;
}

function g() {
  this.x = 5;
  return f(100);
}

console.log(f(5)); 
console.log(g()); 


const h = f.bind({ x: 5 }); 

console.log(h(2));

const i = f.bind({ x: 5 }, 10);

console.log(i()); 

console.log(f.call({ x: 5 }, 3)); 

console.log(f.apply({ x: 5 }, [4]));
