// https://edabit.com/challenge/9KEKJG5PZTFmG3Zau
// Burglary Series (04): Add its Name

function addName(obj, name, value)
{
	obj[name] = value;
	return obj;
}
console.log(addName({}, "Brutus", 300));
console.log(addName({piano: 500}, "Brutus", 400));
console.log(addName({piano: 500, stereo: 300}, "Caligula", 440));