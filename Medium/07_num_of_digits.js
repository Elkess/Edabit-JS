// https://edabit.com/challenge/yFJzLfYghz7ZtsyAN
// Find Number of Digits in Number

function	num_of_digits(num) {
	let	count = 1 * (num == 0);
	while(num)
	{
		num = parseInt(num /10);		
		count++;
	}
	return (count);
}
console.log(num_of_digits(-59525));
