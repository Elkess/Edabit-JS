//What's Hiding Amongst the Crowd?
//https://edabit.com/challenge/rvsvGvqZ3BzNieKqA
// g= > find all the ones that met the condition not onlu the first
// join , we used it because match return an array of char so we joing them to give a word (more readable)
function	detectWord(str)
{
	return (str.match(/[a-z]/g).join(""));
}
console.log(detectWord("UcUNFYGaFYFYGtNUH"));
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));