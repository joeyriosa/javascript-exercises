const repeatString = function(string, num) {
    let returnString = "";
    for (i = 1; i <= num; i++) {
        returnString += string;
    }
    if (num < 0) {
        returnString = "ERROR";
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
