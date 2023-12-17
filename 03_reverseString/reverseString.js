const reverseString = function(word) {
    let returnString = "";
    for (let i = word.length - 1; i >= 0; i--) {
        returnString += word[i];
    }
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
