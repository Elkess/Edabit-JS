// https://edabit.com/challenge/yXSTvCNen2DQHyrh6
// Length of a Nested Array

function	getLength(arr)
{
	let i = 0;
	let count = 0;
	let arra = arr.toString();
	while (arra[i])
	{
		if (arra[i] != ",")
			count++;
		i++;
	}
	return count;
}
// console.log(getLength([1, [3, 4], [5]]));
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));
