// https://edabit.com/challenge/r6TSNwkLZ2DgsoKiH
// Oddish vs. Evenish

function oddishOrEvenish(num) 
{
	let res = 0;
	while (num)
	{
		res += parseInt(num % 10);
		num = parseInt(num / 10);
	}
	return (res % 2 ? "Oddish" : "Evenish");
}
console.log(oddishOrEvenish(4433));
