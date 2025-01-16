// Largest Swap
//https://edabit.com/challenge/hD3euqPHM82Cbr7R8
function largestSwap(num) {
	const num1 = Math.floor(num /10);
	const num2 = Math.floor(num %10);
  console.log(num1, num2);
	return( num1 >= num2 ? true : false)
}
console.log(largestSwap(0));