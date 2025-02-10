// Sum of Resistance in Series Circuits

function seriesResistance(arr) {
	const len = arr.length;
  let i = 0;
  let res = 0;
  while (i < len)
    res += arr[i++];
  if (res <= 1)
	return (res + " ohm");
  return (res + " ohms");
}

function seriesResistance(arr) {
	let sum = arr.reduce((sum, element)=> sum + element);
	return (sum >1 ? sum + " ohms" : sum +" ohm");
}