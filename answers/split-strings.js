// From https://www.codewars.com/kata/split-strings

function splitString(str) {
    return str.split('').reduce((acc, x, i, arr) => {
        if (i % 2 == 0) return acc.concat([[x, arr[i+1] || '_']])
        else return acc;
    }, []);
}
