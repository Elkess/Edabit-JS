function shiftToLefts(x, y) {
	return (x * 2**y )
}

function shiftToLeft(x, y) {
	return (x << y )
}

console.log(shiftToLefts(5,6));
console.log(shiftToLeft(5,6));