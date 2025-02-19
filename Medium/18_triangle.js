// https://edabit.com/challenge/RMZiERz2cbjmbXruY
// Triangular Number Sequence

function triangle(n) {
	if (n == 1)
		return 1;
	return n + triangle(n - 1);
}

console.log(triangle(2));
