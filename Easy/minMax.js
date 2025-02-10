function minMax(arr) {
	let array =[];
	array[0]=Math.min(...arr);
	array[1]=Math.max(...arr);
	return array;
}

let arr=[2, 6, 1];
console.log(minMax(arr));