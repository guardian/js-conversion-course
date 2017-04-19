var re = /quick\s(brown).+?(jumps)/ig;

var results = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');

console.log(results[0]);
console.log(results[1]);
console.log(results[2]);
console.log(results.index);
console.log(results.input);
