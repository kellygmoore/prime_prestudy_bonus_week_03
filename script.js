

function A(x) {
	return x*10;
}

function B(y) {
	return y*10;
}

function C(z) {
	return z*10;
}

bigNum = A(B(C(10)));
console.log(bigNum);