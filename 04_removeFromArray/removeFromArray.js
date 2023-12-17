const removeFromArray = function(source, ...toRemove) {
    let returnArray = [];
    
    for (let i = 0; i < source.length; i++) {
        let found = false;
        for (const item of toRemove) {
            if (source[i] === item) {
                found = true;
                break;
            }
        }
        if (!found) {
            returnArray[returnArray.length] = source[i];
        }
    }
    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
