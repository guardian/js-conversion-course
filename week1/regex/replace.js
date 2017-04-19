const re = /apples/gi;
const str = 'Apples are round, and apples are juicy.';
const newstr = str.replace(re, 'oranges');

console.log(newstr);  // oranges are round, and oranges are juicy.
