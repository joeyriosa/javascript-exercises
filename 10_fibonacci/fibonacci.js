const fibonacci = function(n) {
    if (n === 0 || n === "0") return 0;
    if (n < 0) return 'OOPS';
    let arr = [ 1, 1];
    for (let i = 2; i <= n - 1; i++) {
        let value = arr[i - 2] + arr[i - 1];
        console.log('Value: ' + value);
        arr.push(value);
    }
    console.log(arr);
    return arr.slice(n-1, n)[0];
};

// Do not edit below this line
module.exports = fibonacci;
