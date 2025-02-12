// https://edabit.com/challenge/WEvqZTFcHeYzFn74c
// Perimeters with a Catch

// function perimeter(l, num)
// {
// 	if (l === "c")
// 		return (((Math.PI).toFixed(2) * 2 *num));
// 	else if(l === "s")
// 		return (4*num);
// }
function perimeter(l, num)
{
	const s = 4 * num;
	const c = (Math.PI).toFixed(2) * 2 * num ;

	return (c * (l == "c") + s * (l == "s"));
}
console.log(perimeter("s", 5));
