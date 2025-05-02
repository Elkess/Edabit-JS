// https://edabit.com/challenge/b7iHQDw72zzkmgCun
//  

let arr = [9, 5, 9, 5, 1, 1, 1];
arr = [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2];
arr = [1, 7, 1, 7, 1, 7, 1];
arr = [4, 4, 4, 9, 9, 9, 9];
function countBoomerangs(arr) {
	let len = arr.length;
	let i = 0;
	let count = 0;
	while (i < len -2)
	{
		if (arr[i] == arr[i+2] && arr[i +1] != arr[i])
			count++;
		i++;
	}
	return (count);
}
console.log(countBoomerangs(arr));
