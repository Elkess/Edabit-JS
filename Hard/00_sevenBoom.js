// https://edabit.com/challenge/6R6gReGTGwzpwuffD
// Seven Boom!

function sevenBoom(arr)
{
	let i = 0;
	for(i = 0; i < arr.length; i++)
	{
		if (arr[i].toString().includes('7'))
			return ("Boom!");
	}
	return ("there is no 7 in the array")
}

console.log(sevenBoom([5, 675, 21]));
