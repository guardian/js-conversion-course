x = 2;

function outer() {
	// What if we remove the var here?
	var x = 3;

	function inner() {
		x = 4;
		console.log(`inner x: ${x}`);
	}

	inner();
	console.log(`outer x: ${x}`);
}

outer();
console.log(`global x: ${x}`);