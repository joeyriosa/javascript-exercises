const sumAll = function(a, b) {
    let returnValue = 0;
    let start = 0;
    let end = 0;

    // Validations.
    // Check if not a number
    if (typeof(a) != "number" || typeof(b) != "number") {
        return "ERROR";
    } 
    else if (a < 0 || b < 0) {
        return "ERROR";
    }

    // Always start with the lesser value.
    if (a < b) {
        start = a;
        end = b;
    }
    else {
        start = b;
        end = a;
    }

    for (let i = start; i <= end; i++) {
        returnValue += i;
    }

    return returnValue;
};

// Do not edit below this line
module.exports = sumAll;
