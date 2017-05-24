'use strict';
// Global by default?

function f() {
	a = 3;
}

function g() {
	a = 4;
}

function h() {
	console.log(a);
}

function i() {
    setTimeout = null;
}

// f();
// g();
// h();
i();
setTimeout(1000, x => {console.log(x)});
