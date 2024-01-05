const palindromes = function (input) {
    // only get alphanumeric values.
    let inputString = input.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    return inputString.split("").reverse().join("") === inputString;
    
    // **** My solution.
    // let halfSize = Math.ceil(inputString.length / 2);
    // let ctr = 0;
    // let i = 0, j = inputString.length - 1;
    // do {
    //     if (inputString[i + ctr] !== inputString[j - ctr]) {
    //         return false;
    //     }
    //     ctr++;
    // } while (ctr <= halfSize - 1);

    // return true;
};

// Do not edit below this line
module.exports = palindromes;
