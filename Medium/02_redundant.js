// https://edabit.com/challenge/hzxN9bAebBPNqdQto
// A Redundant Function

function redundant(str) {
	function func()
	{
		return (str);
	}
	return (func)
}
const f1 = redundant("apple")
const f2 = redundant("pear")
const f3 = redundant("")
console.log(f1() );
console.log(f2() == "pear");
console.log(f3() == "");
