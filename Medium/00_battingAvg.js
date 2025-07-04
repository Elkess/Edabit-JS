// https://edabit.com/challenge/MEZtqvEeMbGg2YKtt
// Baseball Batting Average
//  toFixed takes the number average and converts it to a string with exactly 3 decimal places.
function	battingAvg(arr) {
	let hits=0;
	let atbats=0;
	arr.forEach((e) => {
		hits += e[0];
		atbats += e[1];
	});
	let average = hits/atbats;
	return average.toFixed(3).toString().substring(1);
}

console.log(battingAvg([
	[0, 0],
	[1, 3],
	[2, 2],
	[0, 4],
	[1, 5],
]));
