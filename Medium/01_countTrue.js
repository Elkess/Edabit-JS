// https://edabit.com/challenge/GLbuMfTtDWwDv2F73
// How Much is True?

function countTrue(arr)
{
    let n = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i])
            n++;
    }
    return (n);
}

let arr = [true, false, false, true, false];
arr = [false, false, false, false];
console.log(countTrue([]));
