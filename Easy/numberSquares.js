//Number of Squares in an N * N Grid

function numberSquares(n) {
	return (Math.ceil((n**3)/3 + (n**2)/2 + n/6));
}

console.log(numberSquares(2));