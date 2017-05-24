var regex = /foo/g;
var fooStr = '#foo#';
var barStr = '#bar#';

console.log(regex.test(fooStr));
console.log(regex.test(barStr));

var r = new RegExp('foo', 'g');
