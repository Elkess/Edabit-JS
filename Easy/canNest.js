//Check if One Array can be Nested in Another
function canNest(arr1, arr2) {
	if (Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2))
		return (true);
	return (false);
}

arr1=[1, 2, 3, 4];
arr2=[0, 6];
console.log(canNest(arr1, arr2));