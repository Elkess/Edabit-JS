// https://edabit.com/challenge/QeaCDhw3QrLwbeteD
// Christmas Tree

function	tree(h) {
	const hash = "#";
	const space = " ";
	let arr = [];
	let i = 1;
	while (h--)
	{
		arr.push(
			space.repeat(h) + 
			hash.repeat(i) +
			space.repeat(h)  
		);
		i += 2;
	}
	return (arr)
}
console.log(tree(5));