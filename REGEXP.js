// RegEx Exercise 1: Find the Time
const REGEXP = /[0-9][0-9]:[0-9][0-9]/ ;
const REGEX = /\d\d:\d\d/ ;

const str = "Breakfast at 09:55 in the room 123:456.";

console.log(str.match(REGEX)[0])
