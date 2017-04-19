'use strict';
// Global by default?

function f() {
	arr = 3;
}

function g() {
	arr = 4;
}

function h() {
	console.log(arr);
}

function i() {
    setTimeout = null;
}

// f();
// g();
// h();
i();
setTimeout(1000, x => {console.log(x)});
