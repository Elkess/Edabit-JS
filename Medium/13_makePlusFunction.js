// https://edabit.com/challenge/ENWFBL4jbTgLbSqwS
// Function Factory

function	makePlusFunction(baseNum) {
	return ((arg)=> baseNum + arg);
}

const plusTwo = makePlusFunction(2);
const plusFive = makePlusFunction(5);
const plusSeven = makePlusFunction(plusTwo(plusFive(0)));
const plusTen = makePlusFunction(10);

console.log(plusFive(10));
