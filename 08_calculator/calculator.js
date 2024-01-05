const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
};
console.log(sum([]));

const multiply = function(arr) {
	return arr.reduce((previousValue, currentValue) => previousValue * currentValue, 1);
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(n) {
	let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

//don not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
