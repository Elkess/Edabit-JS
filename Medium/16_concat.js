// https://edabit.com/challenge/Hs4TpDHX57Rqegmgg
// Concatenate Variable Number of Input Arrays

// function concat(...args)
// {
// 	let arr = arguments[0];
// 	for (let i = 1; i < arguments.length; i++) {
// 		arr = arr.concat(arguments[i]);
// 	}
// 	return arr
// }

// function concat(...args) {
//     return args.reduce((acc, arr) => acc.concat(arr), []);
// }

function    concat(...args) {
    return args.flat();
}
console.log(concat([1, 2],[5]));
