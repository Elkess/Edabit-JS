function timeForMilkAndCookies(date) {
	if (date.getDate() === 24 && date.getMonth()-1== 10)
    return true;
  return false;
}

console.log(timeForMilkAndCookies(new Date(2020,11,24)));