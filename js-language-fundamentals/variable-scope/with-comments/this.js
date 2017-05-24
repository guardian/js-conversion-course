function f(y) {
  return this.x * y;
}

function g() {
  this.x = 5;
  return f(100);
}

console.log(f(5)); // NaN, because on its own `f` has no `this.x`
console.log(g()); // 500, because `f` inherts `g`'s context (accessible as `this`)


const mult5 = f.bind({ x: 5 }); // `bind` creates a new function 
                                // with the context provided as a parameter

console.log(mult5(2)); // 10


const get50 = f.bind({ x: 5 }, 10); // you can also provide parameters when
                                    // creating a function with `bind`
console.log(get50()); 


console.log(f.call({ x: 5 }, 3)); // 15
                                  // `call` also allows you to specify the
                                  // context, but instead of creating a new
                                  // function, you provide arguments from the
                                  // 2nd parameter onwards

                                  
console.log(f.apply({ x: 5 }, [4])); // 20
                                     // `apply` is similar to `call` but the 
                                     // arguments are provided in an array 
                                     // rather than as separate parameters  

