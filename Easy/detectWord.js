//What's Hiding Amongst the Crowd?
//https://edabit.com/challenge/rvsvGvqZ3BzNieKqA
function detectWord(str) {
  return (str.match(/[a-z]/g).join(""));
}
console.log(detectWord("UcUNFYGaFYFYGtNUH"));
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));