const findTheOldest = function(arr) {
    let sorted = arr.sort((a, b) => {
        let deathYearb = b.yearOfDeath == undefined ? new Date().getFullYear() : b.yearOfDeath;
        let deathYeara = a.yearOfDeath == undefined ? new Date().getFullYear() : a.yearOfDeath;
        return (deathYearb - b.yearOfBirth) - (deathYeara - a.yearOfBirth);
    })
    console.table(sorted);
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
