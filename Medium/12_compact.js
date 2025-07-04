// https://edabit.com/challenge/M6fbYyBkzJXMAu39G
// Learn Lodash (2): Compact

const arr = [1,0,false,null,undefined,"banana"];
// function compact(arr) {
// 	return (arr.filter((element)=> !!element))
// }

function	compact(arr) {
	return (arr.filter((element)=> element))
}
console.log(compact(arr));
